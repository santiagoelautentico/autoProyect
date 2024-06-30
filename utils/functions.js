export const formatearFiltrosDB = (valor) => {
  if (typeof valor === 'number') {
    return valor; // Devuelve el número directamente
  }
  return valor ? new RegExp(valor, "gi") : undefined; // Devuelve la expresión regular para cadenas
};

export const obtenerProximoId = async (modelo) => {
  const ultimoId = await modelo.findOne().sort("-id").exec();
  return ultimoId ? ultimoId.id + 1 : 1;
};
