import { useState, useMemo } from "react";
import { createContext } from "react";

export const GeralContext = createContext();

export const GeralProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfos, setModalInfos] = useState([]);

  const value = useMemo(
    () => ({
      isModalOpen,
      setIsModalOpen,
      modalInfos,
      setModalInfos,
    }),
    [isModalOpen]
  );

  return (
    <GeralContext.Provider value={value}>{children}</GeralContext.Provider>
  );
};
