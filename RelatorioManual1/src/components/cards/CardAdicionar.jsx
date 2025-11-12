import { useContext } from "react";
import { ModalDateContext } from "../../contexts/ModalDateContext";

function CardAdicionar({ title }) {
  const { setIsModalOpen, setModalTitle } = useContext(ModalDateContext);

  return (
    <button
      onClick={() => {
        setIsModalOpen(true);
        setModalTitle(title);
      }}
      className={`text-4xl  font-bold rounded-2xl shadow-2xl border border-gray-400 w-48 h-48 cursor-pointer ${
        title === "+" ? "text-gray-400" : "text-black"
      }`}
    >
      {title}
    </button>
  );
}

export default CardAdicionar;
