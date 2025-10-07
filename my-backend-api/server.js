const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;

// 使用 cors 中间件，允许前端访问
app.use(cors());

// --- 文件下载 API 路由 ---
// 我们创建一个动态路由，:fileName 部分是可变的
app.get('/download/:fileName', (req, res) => {
  // 1. 从 URL 中获取用户请求的文件名
  const { fileName } = req.params;
  
  // 2. 构建文件的绝对路径
  //    __dirname 是当前文件(server.js)所在的目录
  const filePath = path.join(__dirname, 'files', fileName);

  console.log(`收到下载请求: ${fileName}`);
  console.log(`文件路径: ${filePath}`);

  // 3. 使用 res.download() 发送文件
  //    这个方法会自动设置必要的响应头，告诉浏览器这是一个要下载的文件
  res.download(filePath, (err) => {
    if (err) {
      // 如果文件不存在或发生其他错误，可以进行处理
      console.error("文件下载错误: ", err.message);
      res.status(404).json({ error: '文件未找到', message: `服务器上不存在文件: ${fileName}` });
    } else {
      console.log('文件已成功发送');
    }
  });
});


// 基础的 API 路由，用于测试服务器是否在线
app.get('/', (req, res) => {
  res.json({ message: '后端 API 正常运行中' });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`🎉 服务器已成功启动，正在监听 http://localhost:${PORT}`);
});