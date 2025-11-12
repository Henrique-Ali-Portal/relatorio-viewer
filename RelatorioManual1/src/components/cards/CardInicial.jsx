import { useContext } from "react";
import { ModalDateContext } from "../../contexts/ModalDateContext";

function CardInicial({ title }) {
  const { setIsModalOpen, setModalTitle } = useContext(ModalDateContext);

  return (
    <button
      onClick={() => {
        setIsModalOpen(true);
        setModalTitle(title);
      }}
      className="text-4xl  font-bold rounded-2xl shadow-2xl border border-gray-400 w-64 h-64 cursor-pointer"
    >
      {title}
    </button>
  );
}

export default CardInicial;
