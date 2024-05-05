import epi from './epi';

const getUserInfo = async () => {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token de autenticação não encontrado');
    }

    const headers = {
      Authorization: `Bearer ${token}`
    };

    const response = await epi.get('/user', { headers });

    return response.data.user; // Retorna apenas os dados do usuário
  } catch (error) {
    throw error;
  }
};

export { getUserInfo };
