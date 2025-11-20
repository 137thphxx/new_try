const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
require('dotenv').config(); // 如果本地有 .env 文件，这行能帮忙读取，没有也不影响

const app = express();
const PORT = process.env.PORT || 3001; // 适配 Render 的动态端口

// --- 修复 1: 解决 Render 上的 Rate Limit 报错 ---
// 告诉 Express 它位于代理之后 (Render 的负载均衡器)
app.set('trust proxy', 1); 

app.use(cors());
app.use(express.json());

// --- 限流配置 ---
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5, 
  message: { success: false, message: '请求过于频繁，请 15 分钟后再试。' },
  standardHeaders: true, 
  legacyHeaders: false,
});

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

app.get('/download/:fileName', (req, res) => {
  const { fileName } = req.params;
  const filePath = path.join(__dirname, 'files', fileName);
  res.download(filePath, (err) => {
    if (err) res.status(404).json({ error: '文件未找到' });
  });
});

// --- 邮件发送 API ---
app.post('/api/send-email', emailLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: '所有字段都是必填的' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, message: '请输入有效的电子邮箱地址' });
  }

  // --- 修复 2: 使用更稳定的连接配置解决 ETIMEDOUT ---
  // 不再使用 service: 'gmail'，而是显式指定 host 和 port
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // 强制使用 SSL 端口，这在云端更不容易被墙
    secure: true, // 使用 SSL
    auth: {
      // 优先读取环境变量 (Render 上设置的)
      // 这里的 '您的...' 只是本地兜底，Render 上一定要配置环境变量
      user: process.env.EMAIL_USER || 'perry971221@gmail.com', 
      pass: process.env.EMAIL_PASS || 'zjpg yhzs uoue iqxj'
    }
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // 发件人最好是自己的邮箱，避免被当成垃圾邮件
    replyTo: email, // 设置回复地址为客户的邮箱，这样您点回复时直接发给客户
    to: process.env.EMAIL_USER, // 发给自己
    subject: `【官网新询价】来自 ${name}`,
    text: `
      客户姓名: ${name}
      客户邮箱: ${email}
      ---------------------------
      咨询内容:
      ${message}
    `
  };

  try {
    console.log("正在尝试发送邮件...");
    await transporter.sendMail(mailOptions);
    console.log("✅ 邮件发送成功");
    res.status(200).json({ success: true, message: '邮件发送成功' });
  } catch (error) {
    console.error("❌ 发送失败详情:", error);
    res.status(500).json({ success: false, message: '服务器繁忙，请稍后再试' });
  }
});

// 这里的 host '0.0.0.0' 对 Render 很重要，确保它能被外部访问
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🎉 服务器运行在端口 ${PORT}`);
});