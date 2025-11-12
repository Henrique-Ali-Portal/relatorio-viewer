const base = "http://localhost:8000";

export async function getRelatorio() {
  try {
    const res = await fetch(base + "/relatorios");
    if (!res.ok) {
      throw new Error("Falha ao buscar os relatórios");
    }
    const data = await res.json();
    return data.arquivos.map((ind) => ind.nome);
  } catch (err) {
    throw err;
  }
}

export async function setRelatorio(nome, link, funcoes) {
  try {
    const uuid = crypto.randomUUID();
    const res = await fetch(base + "/relatorios/salvar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uuid: uuid,
        nome: nome,
        link: link,
        funcoes: funcoes,
      }),
    });
    if (!res.ok) {
      throw new Error("Falha ao salvar novo relatório");
    }
    const data = await res.json();
    return data.arquivos;
  } catch (err) {
    throw err;
  }
}
