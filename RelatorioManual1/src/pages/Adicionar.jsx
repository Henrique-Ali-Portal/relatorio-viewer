import { useContext, useEffect, useState } from "react";
import Cards from "../components/cards/Cards";
import { ModalDateContext } from "../contexts/ModalDateContext";
import ModalAdicionar from "../components/modals/ModalAdicionar";
import { getRelatorio } from "../services/Relatorios";

function Adicionar() {
  const { isModalOpen } = useContext(ModalDateContext);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const data = await getRelatorio();
        setTitles(data);
      } catch (err) {
        console.error("Erro ao buscar relatórios:", err);
      }
    }

    carregar();
  }, []);

  return (
    <div>
      <div className="shadow-[0_1px_5px_rgba(0,0,0,0.15)]">
        <h1 className="p-4 font-bold text-4xl w-full">Configurações</h1>
        <div className="w-full h-px bg-gray-300" />
      </div>
      <Cards titles={titles} />
      {isModalOpen && <ModalAdicionar />}
    </div>
  );
}

export default Adicionar;
