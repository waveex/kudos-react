import { useState } from "react";

const useModal = (initialState = false) => {
  const [isOpen, setModalState] = useState(initialState);
  const body = document.body;

  const handleOpenModal = () => {
    setModalState(true);
    setTimeout(() => {
      const modalOverlay = document.querySelector(".ReactModal__Overlay");
      body.classList.toggle("hidden");
      modalOverlay.classList.toggle("auto");
    }, 500);
  };
  const handleCloseModal = () => {
    setModalState(false);
    setTimeout(() => {
      body.classList.toggle("hidden");
    }, 500);
  };

  return {
    isOpen,
    handleOpenModal,
    handleCloseModal,
  };
};

export default useModal;
