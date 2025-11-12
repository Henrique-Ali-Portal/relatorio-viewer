import { useEffect } from "react";
import { setRelatorio } from "../../services/Relatorios";

export async function salvarRelatorioConfigs(nome, link, funcoes) {
  try {
    const data = await setRelatorio(nome, link, funcoes);
    console.log(data);
  } catch (err) {
    console.error("Erro ao buscar relatórios:", err);
  }
}
