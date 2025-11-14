import { useState, useMemo } from "react";
import { createContext } from "react";

export const AdicionarContext = createContext();

export const AdicionarProvider = ({ children }) => {
  const [relatorios, setRelatorios] = useState([]);
  const [uuidSelected, setUuidSelected] = useState("");

  const value = useMemo(() => ({
    relatorios,
    setRelatorios,
    uuidSelected,
    setUuidSelected,
  }));

  return (
    <AdicionarContext.Provider value={value}>
      {children}
    </AdicionarContext.Provider>
  );
};
