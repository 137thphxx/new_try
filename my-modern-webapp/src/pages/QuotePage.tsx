import React from 'react';
import QuoteForm from '../components/QuoteForm';

const QuotePage: React.FC = () => {
  return (
    <div style={{ padding: '120px 2rem', minHeight: '100vh', backgroundColor: '#000' }}>
      <QuoteForm />
    </div>
  );
};

export default QuotePage;