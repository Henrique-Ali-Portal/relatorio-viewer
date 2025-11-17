const base = "http://localhost:8001";

export async function getRelatorio() {
  try {
    const res = await fetch(base + "/relatorios");
    if (!res.ok) {
      throw new Error("Falha ao buscar os relatórios");
    }
    const data = await res.json();
    console.log(data.arquivos);
    return data.arquivos;
  } catch (err) {
    throw err;
  }
}

export async function delRelatorio(uuid) {
  try {
    const dados = {
      uuid: uuid,
    };
    const res = await fetch(base + "/relatorios/deletar", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });
    if (!res.ok) {
      throw new Error("Falha ao deletar relatório");
    }
    const data = await res.json();
    console.log(dados);
  } catch (err) {
    throw err;
  }
}

export async function setRelatorio(uuid, nome, link, funcoes) {
  try {
    if (uuid === "") {
      uuid = crypto.randomUUID();
    }
    const dados = {
      uuid: uuid,
      nome: nome,
      link: link,
      funcoes: funcoes,
    };
    const res = await fetch(base + "/relatorios/salvar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });
    if (!res.ok) {
      throw new Error("Falha ao salvar novo relatório");
    }
    const data = await res.json();
    console.log(dados);
    return dados;
  } catch (err) {
    throw err;
  }
}
