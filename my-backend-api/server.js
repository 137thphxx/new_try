const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit'); // 1. 引入限流插件

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// --- 安全配置：创建限流器 ---
// 规则：同一个 IP 地址，在 15 分钟内，最多只能请求 5 次
const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 分钟
  max: 5, // 限制次数
  message: { 
    success: false, 
    message: '请求过于频繁，请 15 分钟后再试。' // 超限后的返回信息
  },
  standardHeaders: true, // 返回 RateLimit-* 头信息
  legacyHeaders: false,
});

// --- 辅助函数：验证邮箱格式 ---
const isValidEmail = (email) => {
  // 这是一个标准的邮箱验证正则表达式
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

// --- 1. 文件下载 API (保持不变) ---
app.get('/download/:fileName', (req, res) => {
  const { fileName } = req.params;
  const filePath = path.join(__dirname, 'files', fileName);
  res.download(filePath, (err) => {
    if (err) res.status(404).json({ error: '文件未找到' });
  });
});

// --- 2. 邮件发送 API (已加固) ---
// 注意：我们在路径后面加上了 emailLimiter，表示这个接口受限流保护
app.post('/api/send-email', emailLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  // --- 安全检查 A：必填项检查 ---
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: '所有字段都是必填的' });
  }

  // --- 安全检查 B：邮箱格式检查 ---
  if (!isValidEmail(email)) {
    return res.status(400).json({ success: false, message: '请输入有效的电子邮箱地址' });
  }

  // --- 这里的 transporter 配置请保留您刚才填好的真实账号 ---
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'perry971221@gmail.com', // 记得确认这里是您的真实配置
      pass: 'zjpg yhzs uoue iqxj'      // 记得确认这里是您的真实配置
    }
  });

  const mailOptions = {
    from: email, 
    to: 'perry971221@gmail.com', 
    subject: `【新询价】来自客户 ${name}`,
    text: `姓名: ${name}\n邮箱: ${email}\n内容:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ 邮件发送成功");
    res.status(200).json({ success: true, message: '邮件发送成功' });
  } catch (error) {
    console.error("❌ 发送失败:", error);
    res.status(500).json({ success: false, message: '服务器繁忙，请稍后再试' });
  }
});

app.listen(PORT, () => {
  console.log(`🎉 安全服务器运行在 http://localhost:${PORT}`);
});