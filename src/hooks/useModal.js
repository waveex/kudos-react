import { useState } from "react";

const useModal = (initialState = false) => {
  const [isOpen, setModalState] = useState(initialState);

  const handleOpenModal = () => {
    setModalState(true);
    document.body.style.overflow = "hidden";
  };
  const handleCloseModal = () => {
    setModalState(false);
    document.body.style.overflow = "visible";
  };

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
