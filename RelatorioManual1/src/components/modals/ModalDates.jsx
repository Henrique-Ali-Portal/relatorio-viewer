import { useState } from "react";
import { DateRange } from "react-date-range";
import { pt } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function ModalDates({ changeModalState }) {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-[500px] h-[500px] bg-white rounded-2xl p-6 flex flex-col shadow-black shadow-lg border border-gray-400">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold">Vendas</h1>
          <button
            onClick={() => changeModalState(false)}
            className="cursor-pointer text-red-700 hover:text-red-950 font-bold text-[18px] transition"
          >
            X
          </button>
        </div>
        <DateRange
          className="border rounded-lg p-2"
          editableDateInputs={true}
          onChange={(item) => setRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={range}
          locale={pt}
          dateDisplayFormat="dd/MM/yyyy"
        />
        <button className="bg-green-700 mt-4 p-1 cursor-pointer rounded-md text-white text-2xl font-bold flex items-center justify-center">
          Carregar
        </button>
      </div>
    </div>
  );
}

export default ModalDates;
