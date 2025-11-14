import { useContext, useState } from "react";
import { GeralContext } from "../../contexts/GeralProvider";
import { Trash2, Save } from "lucide-react";
import { setRelatorio } from "../../services/Relatorios";
import { AdicionarContext } from "../../contexts/AdicionarProvider";

function ModalAdicionar({ uuid }) {
  const [nomeRelatorio, setNomeRelatorio] = useState("");
  const [linkApi, setLinkApi] = useState("");
  const [listFuncoes, setListaFuncoes] = useState("");

  const { setIsModalOpen, modalTitle } = useContext(GeralContext);

  return (
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
      <div className="flex flex-row gap-4 py-5">
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
  );
}

export default ModalAdicionar;
