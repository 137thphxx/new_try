import React from 'react';
import ApplicationItem from './ApplicationItem';
import type { ApplicationItemProps } from './ApplicationItem';
import { useLanguage } from '../../context/LanguageContext';

import styles from './Applications.module.css';


const applicationsDataZh: ApplicationItemProps[] = [
  { icon: '🛡️', title: '军用防护', description: '防弹衣、头盔、防护装备等军用防护产品，提供卓越的弹道防护性能。' },
  { icon: '🚁', title: '航空航天', description: '飞机结构件、卫星部件、火箭发动机部件等，具备轻量化和高强度特性。' },
  { icon: '🔥', title: '消防安全', description: '消防服、阻燃服、高温防护服等，提供优异的阻燃和耐高温保护。' },
  { icon: '🏭', title: '工业应用', description: '传送带、密封件、复合材料增强等工业用途，提升产品性能和寿命。' }
];

const applicationsDataEn: ApplicationItemProps[] = [
    { icon: '🛡️', title: 'Military Protection', description: 'Body armor, helmets, and protective gear providing excellent ballistic performance.' },
    { icon: '🚁', title: 'Aerospace', description: 'Lightweight and high-strength components for aircraft structures, satellites, and rockets.' },
    { icon: '🔥', title: 'Fire Safety', description: 'Superior flame retardant and heat protection for firefighting suits and high-temp apparel.' },
    { icon: '🏭', title: 'Industrial', description: 'Enhancing performance and lifespan in conveyor belts, seals, and composite reinforcements.' }
];

const Applications: React.FC = () => {
  const { language, t } = useLanguage();
  const applicationsData = language === 'zh' ? applicationsDataZh : applicationsDataEn;

  return (
    <section id="applications" className={styles.applications}>
      <div className={styles.content}>
        <h2 className={"section-title"}>{t('应用领域', 'Applications')}</h2>
        <div className={styles.grid}>
          {applicationsData.map(app => (
            <ApplicationItem
              key={app.title}
              icon={app.icon}
              title={app.title}
              description={app.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;