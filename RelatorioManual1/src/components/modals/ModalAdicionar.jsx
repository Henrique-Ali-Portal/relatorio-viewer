import { useContext, useState } from "react";
import { ModalDateContext } from "../../contexts/ModalDateContext";
import { Trash2, Save } from "lucide-react";
import { setRelatorio } from "../../services/Relatorios";

function ModalAdicionar() {
  const [nomeRelatorio, setNomeRelatorio] = useState("");
  const [linkApi, setLinkApi] = useState("");
  const [listFuncoes, setListaFuncoes] = useState("");

  const { setIsModalOpen, modalTitle } = useContext(ModalDateContext);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-[500px] h-[400px] bg-white rounded-2xl flex flex-col shadow-black shadow-lg border border-gray-400">
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
        <div className="w-full px-6 flex flex-col gap-y-6">
          <div className="">
            <h1 className="font-semibold text-lg pb-1">Nome Relatório</h1>
            <input
              className="p-1 rounded-md border border-gray-400 placeholder-gray-400 w-full"
              type="text"
              placeholder="Nome"
              onChange={(e) => setNomeRelatorio(e.target.value)}
            />
          </div>
          <div className="">
            <h1 className="font-semibold text-lg pb-1">Link API</h1>
            <input
              className="p-1 rounded-md border border-gray-400 placeholder-gray-400 w-full"
              type="text"
              placeholder="API"
              onChange={(e) => setLinkApi(e.target.value)}
            />
          </div>
          <div className="">
            <h1 className="font-semibold text-lg pb-1">Funções</h1>
            <input
              className="p-1 rounded-md border border-gray-400 placeholder-gray-400 w-full"
              type="text"
              placeholder="Funções"
              onChange={(e) => setListaFuncoes(e.target.value)}
            />
          </div>
          <div className="flex flex-row gap-4">
            <button
              onClick={() => setRelatorio(nomeRelatorio, linkApi, listFuncoes)}
              className="cursor-pointer py-1 w-full font-bold bg-red-700 text-white border border-red-950 rounded-md flex flex-row items-center justify-center gap-2"
            >
              <h1>Remover</h1>
              <Trash2 />
            </button>
            <button
              onClick={() => setRelatorio(nomeRelatorio, linkApi, listFuncoes)}
              className="cursor-pointer py-1 w-full font-bold bg-green-700 text-white border border-green-800 rounded-md flex flex-row items-center justify-center gap-2"
            >
              <h1>Salvar</h1>
              <Save />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAdicionar;
