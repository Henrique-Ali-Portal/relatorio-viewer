import "./styles/App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import TabelaVendas from "./components/TabelaVendas";

import Cards from "./components/cards/Cards";
import ModalDates from "./components/modals/ModalDates";

function App() {
  const [onModal, changeModalState] = useState(false);
  return (
    //<TabelaVendas />
    <div className="inline-block w-full">
      <h1 className="text-3xl m-4 ml-4 font-bold">Relatórios </h1>
      <hr className="border-t border-gray-300 w-full" />
      <Cards changeModalState={changeModalState} />
      {onModal && <ModalDates changeModalState={changeModalState} />}
    </div>
  );
}

export default App;
