import React from "react";
import SaleOrderForm from "./SaleOrderForm";
import "../styles.css";
const SaleOrderModal = ({ isOpen, onClose, order, readOnly, onSave }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <SaleOrderForm order={order} readOnly={readOnly} onSave={onSave} />
      </div>
    </div>
  );
};

export default SaleOrderModal;
