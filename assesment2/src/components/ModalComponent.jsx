import DynamicFieldsForm from "./DynamicFieldsForm";
import useModal from "./useModal";

const ModalComponent = () => {
    const [ModalWrapper, isOpen, openModal, closeModal] = useModal();
    
    return (
    <div>
        <button onClick={openModal}>Open Modal xx</button>
        {isOpen && <ModalWrapper>
                        <h1>This is just s sample modal </h1>
                    </ModalWrapper>
        }
    </div>
    );
}; 

export default ModalComponent;