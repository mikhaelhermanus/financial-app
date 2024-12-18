'use client';
import React, { useEffect, useState } from 'react';

const Snackbar = ({ message, severity = 'error', open, onClose }) => {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setVisible(true);

      // Auto close snackbar after 4 seconds
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg text-white text-sm z-50 ${
        severity === 'error' ? 'bg-red-600' : 'bg-green-600'
      }`}
    >
      {message}
    </div>
  );
};

export default Snackbar;
