const baseUrl = 'http://localhost:3000';

const handleJson = async (response) => {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.erro || 'Erro na requisição de autenticação.'); 
  }
  return data;
};

export async function login({ email, password }) {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, senha: password }),
  });

  return handleJson(response);
}

export async function register({ nome, email, password }) {
  const response = await fetch(`${baseUrl}/auth/cadastro`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nome, email, senha: password }),
  });

  return handleJson(response);
}