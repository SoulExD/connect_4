import React from "react";
import "./Popup.css"; // Make sure you have relevant styles for the popup

interface PopupProps {
  message: string;
  onClose: () => void;  // Function to handle restart
}

const Popup: React.FC<PopupProps> = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{message}</h2>
        {/* Restart button is now part of the popup */}
        <button onClick={onClose} className="popup-restart-button">Restart</button>
      </div>
    </div>
  );
};

export default Popup;
