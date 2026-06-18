import React, { useState } from "react";

const CustomModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div>
        {title && <h2>{title}</h2>}

        <div>{children}</div>

        <button onClick={onClose}>✕</button>
      </div>
    </div>
  );
};


const Modal = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      
      <CustomModal isOpen={open} onClose={() => setOpen(false)} title="My Modal">
        <p>This is a custom modal in React </p>
      </CustomModal>
    </div>
  );
};

export default Modal;
