export function localizeInfosPorUUID(uuid, dados) {
  return dados.find((item) => item.uuid === uuid);
}
