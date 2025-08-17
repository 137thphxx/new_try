import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

import styles from './QuoteFrom.module.css';

const QuoteForm: React.FC = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    country: '',
    industry: '',
    products: '',
    quantity: '',
    timeline: '',
    requirements: '',
    privacy: false,
    newsletter: false,
  });
  
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prevData => ({
            ...prevData,
            [name]: checked,
        }));
    } else {
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.company || !formData.contact || !formData.email || !formData.privacy) {
        setMessage(t('请填写所有必填字段并同意隐私政策。', 'Please fill all required fields and agree to the privacy policy.'));
        return;
    }

    console.log('提交的表单数据:', formData);
    setMessage(t('询价申请提交成功！我们将在24小时内与您联系。', 'Quote request submitted! We will contact you within 24 hours.'));
  };
  
  return (
    <section id="quote" className={styles["quote"]}>
      <div className={styles["quote-content"]}>
        <div className={styles["lang-content active"]} data-lang="zh">
          <h2 className={styles["section-title"]}>{t('产品询价', 'Request Quote')}</h2>
          <form className={styles["quote-form"]} onSubmit={handleSubmit}>
            
            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label htmlFor="company">{t('公司名称 *', 'Company Name *')}</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="contact">{t('联系人 *', 'Contact Person *')}</label>
                <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
              </div>
            </div>
            
            <div className={styles["form-row"]}>
                <div className={styles["form-group"]}>
                    <label htmlFor="email">{t('邮箱地址 *', 'Email Address *')}</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className={styles["form-group"]}>
                    <label htmlFor="phone">{t('联系电话', 'Phone Number')}</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
            </div>

            <div className={styles["form-group"]}>
                <label htmlFor="products">{t('感兴趣的产品 *', 'Product of Interest *')}</label>
                <select id="products" name="products" value={formData.products} onChange={handleChange} required>
                    <option value="">{t('请选择产品类型', 'Please Select Product Type')}</option>
                    <option value="para-aramid">{t('对位芳纶纤维', 'Para-Aramid Fiber')}</option>
                    <option value="meta-aramid">{t('间位芳纶纤维', 'Meta-Aramid Fiber')}</option>
                    <option value="honeycomb">{t('芳纶蜂窝材料', 'Aramid Honeycomb')}</option>
                </select>
            </div>
            
            <div className={styles["form-group"]}>
                <label htmlFor="requirements">{t('具体需求描述', 'Detailed Requirements')}</label>
                <textarea id="requirements" name="requirements" value={formData.requirements} onChange={handleChange} placeholder={t('请详细描述您的技术要求...', 'Please describe your technical requirements...')}></textarea>
            </div>

            <div className={styles["checkbox-group"]}>
                <input type="checkbox" id="privacy" name="privacy" checked={formData.privacy} onChange={handleChange} required />
                <label htmlFor="privacy">{t('我已阅读并同意', 'I have read and agree to the ')}<a href="#" style={{ color: '#00ff94' }}>{t('隐私政策', 'Privacy Policy')}</a></label>
            </div>
            
            <button type="submit" className={styles["submit-btn"]}>{t('提交询价申请', 'Submit Quote Request')}</button>

            {message && <div className={styles["form-message success"]} style={{display: 'block'}}>{message}</div>}
          
          </form>
        </div>
      </div>
    </section>
  );
}; 

export default QuoteForm;