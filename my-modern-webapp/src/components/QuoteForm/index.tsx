import React, { useState } from 'react';
import styles from './QuoteForm.module.css';
import { useLanguage } from '../../context/LanguageContext'; // 引入语言Hook
import { API_BASE_URL } from '../../config';

const QuoteForm: React.FC = () => {
  const { t } = useLanguage(); // 使用 t 函数
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // 如果后端返回错误，我们尽量显示通用的双语错误，或者直接显示后端的英文
        setErrorMsg(result.message || t('发送失败', 'Sending failed'));
        setStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
      setErrorMsg(t('网络连接错误，请稍后再试。', 'Network error. Please try again later.'));
    }
  };

  return (
    <div className={styles['form-container']}>
      <h2 style={{ color: '#fff', marginBottom: '1.5rem', textAlign: 'center' }}>
        {t('获取产品报价', 'Request a Quote')}
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label className={styles.label}>
            {t('您的姓名', 'Your Name')}
          </label>
          <input 
            type="text" 
            name="name"
            required
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            placeholder={t('请输入您的称呼', 'Enter your name')}
          />
        </div>

        <div className={styles['form-group']}>
          <label className={styles.label}>
            {t('电子邮箱', 'Email Address')}
          </label>
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
          <label className={styles.label}>
            {t('咨询内容 / 需求描述', 'Message / Requirements')}
          </label>
          <textarea 
            name="message"
            required
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            placeholder={t(
              '请描述您感兴趣的产品或具体规格...',
              'Please describe the products or specifications you are interested in...'
            )}
          />
        </div>

        <button type="submit" className={styles['submit-btn']} disabled={status === 'submitting'}>
          {status === 'submitting' 
            ? t('正在发送...', 'Sending...') 
            : t('发送询价请求', 'Send Request')
          }
        </button>

        {status === 'success' && (
          <p className={styles['success-msg']}>
            {t('✅ 发送成功！我们会尽快联系您。', '✅ Sent successfully! We will contact you soon.')}
          </p>
        )}
        
        {status === 'error' && (
          <p className={styles['error-msg']}>
            {/* 如果有具体的错误信息就显示，否则显示通用错误 */}
            ❌ {errorMsg || t('发送失败，请检查网络或稍后再试。', 'Sending failed. Please check network.')}
          </p>
        )}
      </form>
    </div>
  );
};

export default QuoteForm;