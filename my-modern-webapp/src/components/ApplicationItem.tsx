import React from 'react';

export interface ApplicationItemProps {
  icon: string;
  title: string;
  description: string;
}

const ApplicationItem: React.FC<ApplicationItemProps> = ({ icon, title, description }) => {
  return (
    <div className="application-item">
      <div className="application-icon">{icon}</div>
      <h3 className="application-title">{title}</h3>
      <p className="application-desc">{description}</p>
    </div>
  );
};

export default ApplicationItem;