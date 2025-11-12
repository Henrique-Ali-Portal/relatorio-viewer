from datetime import datetime
from urllib.parse import urlparse, parse_qs, unquote
import json


def read_file(link):
    if not link:
        return "Link Inválido ou Vazio"

    def valida_data(valor):
        try:
            return bool(valor and datetime.strptime(valor.strip(), "%d/%m/%Y"))
        except ValueError:
            return False

    params = {
        k: unquote(v[0])
        for k, v in parse_qs(urlparse(link).query).items()
    }

    data_inicio = next((k for k, v in params.items() if "data" in k and "inicio" in k and valida_data(v)), "")
    data_fim = next((k for k, v in params.items() if "data" in k and "fim" in k and valida_data(v)), "")

    r_antigo = 'relatorio_antigo' if 'id' in params else 'relatorio_novo'

    return (data_inicio, data_fim, r_antigo) if data_inicio and data_fim else None
