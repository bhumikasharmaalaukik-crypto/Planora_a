import React, { useEffect } from "react";
import "../styles/Notification.css";

function Notification({ message, type, onClose }) {

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className={`notification notification-${type}`}>

      <span className="notification-icon">
        {type === "success" ? "✓" : "!"}
      </span>

      <span className="notification-message">
        {message}
      </span>

      <button
        className="notification-close"
        onClick={onClose}
      >
        ×
      </button>

    </div>
  );
}

export default Notification;