import epi from './epi';

const getUserInfo = async () => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token de autenticação não encontrado');
    }

    // Define os cabeçalhos da requisição com o token de autenticação
    const headers = {
      Authorization: `Bearer ${token}`
    };

    const response = await epi.get('/user', { headers });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getUserInfo };
