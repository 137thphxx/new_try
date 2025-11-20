// 这里的逻辑是：
// 如果我们在本地运行 (import.meta.env.DEV 为 true)，就用 localhost:3001
// 如果是生产环境 (部署后)，我们需要填入真实的后端网址 (暂时先空着，部署完后端再回来填)

export const API_BASE_URL = import.meta.env.DEV 
  ? 'http://localhost:3001' 
  : 'https://YOUR_BACKEND_URL_HERE.onrender.com';