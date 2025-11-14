import { useState, useMemo } from "react";
import { createContext } from "react";

export const GeralContext = createContext();

export const GeralProvider = ({ children }) => {
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
    <GeralContext.Provider value={value}>{children}</GeralContext.Provider>
  );
};
