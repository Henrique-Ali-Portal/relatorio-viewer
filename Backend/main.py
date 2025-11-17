import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from utils import read_file


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ou ["http://localhost:5173"] se quiser restringir
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Relatorio(BaseModel):
    uuid: str
    nome: str
    link: str
    funcoes: str


class DelRelatorio(BaseModel):
    uuid: str

@app.get("/relatorios")
def listar_arquivos():
    pasta = os.path.join(os.path.dirname(__file__), "Configs")
    arquivos = []

    for f in os.listdir(pasta):
        caminho = os.path.join(pasta, f)
        if os.path.isfile(caminho) and f.lower().endswith(".json"):
            with open(caminho, "r", encoding="utf-8") as arq:
                dados = json.load(arq)
                nome = dados.get("nome")
                uuid = dados.get("uuid")
                link = dados.get("link")
                funcoes = dados.get("funcoes")
                if dados.get("cancelado") is None or dados.get("cancelado") is False :
                    arquivos.append({"nome": nome, "uuid": uuid, "link": link, "funcoes": funcoes})

    return {"arquivos": arquivos}


@app.delete("/relatorios/deletar")
def deletar_relatorio(delrelatorio: DelRelatorio):
    pasta = os.path.join(os.path.dirname(__file__), "Configs")

    for f in os.listdir(pasta):
        caminho = os.path.join(pasta, f)
        if os.path.isfile(caminho) and f.rsplit(".", 1)[0] == delrelatorio.uuid:
            with open(caminho, "r", encoding="utf-8") as file:
                dados = json.load(file)

            dados["cancelado"] = True

            with open(caminho, "w", encoding="utf-8") as file:
                json.dump(dados, file, ensure_ascii=False, indent=4)


@app.post("/relatorios/salvar")
def salvar_novo_relatorio(relatorio: Relatorio):
    os.makedirs("configs", exist_ok=True)
    print(relatorio)
    data_inicio, data_fim, tipo_relatorio = read_file(relatorio.link) or ("", "", "")

    dados = {"uuid": relatorio.uuid, "nome": relatorio.nome, "link": relatorio.link, "funcoes": relatorio.funcoes, "data_inicio": data_inicio, "data_fim": data_fim, "tipo_relatorio": tipo_relatorio}
    with open("Configs/" + relatorio.uuid + ".json", "w", encoding="utf-8") as f:
        json.dump(dados, f, ensure_ascii=False, indent=4)

    return {"mensagem": f"Arquivo salvo com sucesso!"}
