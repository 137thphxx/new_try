import React from 'react';

import styles from './Applications.module.css';

export interface ApplicationItemProps {
  icon: string;
  title: string;
  description: string;
}

const ApplicationItem: React.FC<ApplicationItemProps> = ({ icon, title, description }) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
};

export default ApplicationItem;