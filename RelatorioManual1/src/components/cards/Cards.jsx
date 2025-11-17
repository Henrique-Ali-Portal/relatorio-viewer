import { useLocation } from "react-router-dom";
import Card from "./Card";
import { AdicionarContext } from "../../contexts/AdicionarProvider";
import { useContext } from "react";

function Cards() {
  let infos = [];
  const location = useLocation().pathname;

  let conteudo;

  if (location === "/adicionar") {
    const { relatorios } = useContext(AdicionarContext);
    infos = relatorios.map(({ nome, uuid }) => ({ nome, uuid }));
    console.log(relatorios);
    infos.unshift({ nome: "+", uuid: null });
    //conteudo = <Card title="+" />;
  }

  return (
    <div className="gap-5 flex m-8">
      {infos.map((info, index) => (
        <Card key={index} title={info.nome} uuid={info.uuid} />
      ))}
    </div>
  );
}

export default Cards;
