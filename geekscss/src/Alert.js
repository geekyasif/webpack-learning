import React from 'react';

const Alert = ({ message }) => {
  return (
    <div
      style={{
        backgroundColor: '#f8d7da',
        color: '#721c24',
        border: '1px solid #f5c6cb',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
      }}
    >
      {message}
    </div>
  );
};

export default Alert;
