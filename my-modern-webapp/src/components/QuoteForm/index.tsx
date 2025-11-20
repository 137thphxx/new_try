import React, { useState } from 'react';
import styles from './QuoteForm.module.css';
import { API_BASE_URL } from '../../config';

const QuoteForm: React.FC = () => {
  // 定义表单状态
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // 处理输入框变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 阻止页面刷新
    setStatus('submitting');

    try {
      // 发送数据给后端
      const response = await fetch(`${API_BASE_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // 告诉后端我发的是 JSON
        },
        body: JSON.stringify(formData) // 把对象转成字符串发送
      });

      const result = await response.json(); // 获取后端返回的 JSON

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // --- 修改这里 ---
        // 直接使用后端返回的具体错误信息 (result.message)
        // 比如 "请输入有效的电子邮箱地址" 或 "请求过于频繁..."
        console.error(result.message);
        alert(result.message); // 或者用更加友好的 UI 显示这个 message
        setStatus('error');
      }
    } catch (error) {
      console.error('网络错误:', error);
      setStatus('error');
    }
  };

  return (
    <div className={styles['form-container']}>
      <h2 style={{ color: '#fff', marginBottom: '1.5rem', textAlign: 'center' }}>
        获取产品报价
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label className={styles.label}>您的姓名</label>
          <input 
            type="text" 
            name="name"
            required
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            placeholder="请输入您的称呼"
          />
        </div>

        <div className={styles['form-group']}>
          <label className={styles.label}>电子邮箱</label>
          <input 
            type="email" 
            name="email"
            required
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            placeholder="example@company.com"
          />
        </div>

        <div className={styles['form-group']}>
          <label className={styles.label}>咨询内容 / 需求描述</label>
          <textarea 
            name="message"
            required
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            placeholder="请描述您感兴趣的产品或具体规格..."
          />
        </div>

        <button type="submit" className={styles['submit-btn']} disabled={status === 'submitting'}>
          {status === 'submitting' ? '正在发送...' : '发送询价请求'}
        </button>

        {status === 'success' && <p className={styles['success-msg']}>✅ 发送成功！我们会尽快联系您。</p>}
        {status === 'error' && <p className={styles['error-msg']}>❌ 发送失败，请检查网络或稍后再试。</p>}
      </form>
    </div>
  );
};

export default QuoteForm;