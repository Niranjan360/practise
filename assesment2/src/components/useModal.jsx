import { createPortal } from 'react-dom';
import { useState } from 'react';

// The modal content component
const ModalContent = ({ onClose , children }) => {
    return (
        <div className="modal">
            {children}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

// The modal component
const Modal = ({ onClose, children }) => {
    return createPortal(
        <div className="modal-overlay">
        {children}
        </div>,
        document.body
    );
};

// The reusable modal hook
const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const ModalWrapper = ({ children }) => (
        <Modal onClose={closeModal}>
            <ModalContent onClose={closeModal}>{children}</ModalContent>
        </Modal>
    );

    return [ModalWrapper, isOpen, openModal, closeModal];
};


export default useModal;