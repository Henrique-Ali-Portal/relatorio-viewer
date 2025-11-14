import { useContext } from "react";
import { GeralContext } from "../../contexts/GeralProvider";
function Card({ title, uuid }) {
  const { setIsModalOpen, setModalTitle } = useContext(GeralContext);

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

export default Card;
