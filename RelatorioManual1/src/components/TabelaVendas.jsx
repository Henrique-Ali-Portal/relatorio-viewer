import React, { useEffect, useState } from "react";

const TabelaVendas = () => {
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    const fetchVendas = async () => {
      try {
        const data_min = "2025-09-01";
        const data_max = "2025-09-01";
        const response = await fetch(
          `https://zxj83qlsb5.execute-api.sa-east-1.amazonaws.com/prod/Dados?data_min=${data_min}&data_max=${data_max}`
        );
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setVendas(data);
      } catch (error) {
        console.error("Erro ao buscar vendas:", error);
      }
    };

    fetchVendas();
  }, []);

  return (
    <div className="px-4 py-2 inline-block">
      <table className="border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            {vendas.length > 0 &&
              Object.keys(vendas[0]).map((key) => (
                <th key={key} className="px-4 py-2 text-left whitespace-nowrap">
                  {key}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {vendas.map((item, index) => (
            <tr key={index} className="border-t border-gray-300">
              {Object.values(item).map((values) => (
                <td className="px-4 py-2 text-left whitespace-nowrap">
                  {values}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaVendas;
