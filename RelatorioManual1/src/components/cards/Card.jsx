import { useContext } from "react";
import { GeralContext } from "../../contexts/GeralProvider";
import { AdicionarContext } from "../../contexts/AdicionarProvider";
import { localizeInfosPorUUID } from "../utils/utilities";

function Card({ title, uuid }) {
  const { setIsModalOpen, setModalInfos } = useContext(GeralContext);
  const { relatorios } = useContext(AdicionarContext);

  return (
    <button
      onClick={() => {
        setIsModalOpen(true);
        setModalInfos(
          localizeInfosPorUUID(uuid, relatorios) || {
            uuid: "",
            nome: "",
            link: "",
            funcoes: "",
          }
        );
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
