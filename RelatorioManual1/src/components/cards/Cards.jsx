import CardInicial from "./CardInicial";
import CardAdicionar from "./CardAdicionar";
import { useLocation } from "react-router-dom";

function Cards({ titles = [] }) {
  const location = useLocation().pathname;

  let conteudo;

  if (location === "/adicionar") {
    conteudo = <CardAdicionar title="+" />;
  }

  return (
    <div className="gap-5 flex m-8">
      {conteudo}
      {titles.length > 0 &&
        titles.map((title, index) => {
          if (location === "/") {
            return <CardInicial key={index} title={title} />;
          }
          if (location === "/adicionar") {
            return <CardAdicionar key={index} title={title} />;
          }
          return;
        })}
    </div>
  );
}

export default Cards;
