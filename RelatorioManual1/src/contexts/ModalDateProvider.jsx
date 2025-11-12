import { useState, useMemo } from "react";
import { ModalDateContext } from "./ModalDateContext";

export const ModalDateProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const value = useMemo(
    () => ({
      isModalOpen,
      setIsModalOpen,
      modalTitle,
      setModalTitle,
    }),
    [isModalOpen, modalTitle]
  );

  return (
    <ModalDateContext.Provider value={value}>
      {children}
    </ModalDateContext.Provider>
  );
};
