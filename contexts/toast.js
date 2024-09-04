
import React, { createContext, useContext, useState } from 'react';

// Create a Context for the toast notifications
const ToastContext = createContext();

// Custom hook to use the ToastContext
export const useToast = () => {
  return useContext(ToastContext);
};

// Provider component to wrap your application
export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState('');
  const [message, setMessage] = useState('');
  const [position, setPosition] = useState('right'); // Example positions: 'right', 'left', 'top', 'bottom'

  return (
    <ToastContext.Provider value={{ toast, setToast, message, setMessage, position, setPosition }}>
      {children}
      {toast && (
        <div style={{ position: 'fixed', [position]: '10px', bottom: '10px', zIndex: 9999 }}>
          <div className="toast">
            {message}
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};
