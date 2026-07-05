const baseUrl = 'http://localhost:3000';

const normalizeClass = (item, index) => {
  const id = item.id;
  const titulo = item.nome;
  const descricao = item.descricao;
  const videoUrl = item.link;

  return {
    id,
    titulo,
    descricao,
    videoUrl,
  };
};

export async function getAllClasses() {
  const response = await fetch(`${baseUrl}/classes/all`, {
    headers: {
      Accept: 'application/json',
    },
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.erro || data?.message || 'Erro ao buscar as aulas.');
  }

  const classes = Array.isArray(data)
    ? data
    : data?.classes ?? data?.data ?? data?.result ?? [];

  return classes.map(normalizeClass);
}
