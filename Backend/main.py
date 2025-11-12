import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ou ["http://localhost:5173"] se quiser restringir
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Relatorio(BaseModel):
    nome: str
    link: str
    funcoes: str

@app.get("/relatorios")
def listar_arquivos():
  pasta = os.path.join(os.path.dirname(__file__), "Configs")
  arquivos = [os.path.splitext(f)[0] for f in os.listdir(pasta) if os.path.isfile(os.path.join(pasta, f))]
  return {"arquivos": arquivos}


@app.post("/relatorios/salvar")
def salvar_novo_relatorio(relatorio: Relatorio):
    os.makedirs("configs", exist_ok=True)
    nome_arquivo = f"configs/{relatorio.nome.replace(' ', '')}.json"
    dados = {"nome": relatorio.nome, "link": relatorio.link, "funcoes": relatorio.funcoes}
    with open(nome_arquivo, "w", encoding="utf-8") as f:
        json.dump(dados, f, ensure_ascii=False, indent=4)
    return {"mensagem": f"Arquivo {nome_arquivo} salvo com sucesso!"}
