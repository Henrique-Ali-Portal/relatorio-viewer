import { useContext, useState } from "react";
import { GeralContext } from "../../contexts/GeralProvider";
import { Trash2, Save } from "lucide-react";
import { setRelatorio } from "../../services/Relatorios";

function ModalTeste({ children }) {
  const [nomeRelatorio, setNomeRelatorio] = useState("");
  const [linkApi, setLinkApi] = useState("");
  const [listFuncoes, setListaFuncoes] = useState("");

  const { setIsModalOpen, modalTitle } = useContext(GeralContext);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-[500px] bg-white rounded-2xl flex flex-col shadow-black shadow-lg border border-gray-400">
        <div className="shadow-[0_1px_5px_rgba(0,0,0,0.15)] mb-4">
          <div className="flex items-center justify-between px-6 py-2">
            <h1 className="text-2xl font-bold">
              {modalTitle === "+" ? "Adicionar" : modalTitle}
            </h1>
            <button
              onClick={() => setIsModalOpen(false)}
              className="cursor-pointer text-red-700 hover:text-red-950 font-bold text-[18px] transition"
            >
              X
            </button>
          </div>
          <div className="w-full h-px bg-gray-300" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModalTeste;
