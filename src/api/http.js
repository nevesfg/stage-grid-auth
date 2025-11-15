import axios from 'axios';

// Detectar ambiente e definir baseURL
// Em produção (via nginx), usar caminho relativo
// Em desenvolvimento, usar URL completa
const getBaseURL = () => {
  // Se estiver rodando em produção (via nginx), usar caminho relativo
  if (window.location.hostname === 'nevesfg.com' || window.location.hostname === 'www.nevesfg.com') {
    return '/desafio-lsmais/api';
  }
  // Em desenvolvimento, usar a URL completa ou variável de ambiente
  return process.env.VUE_APP_API_URL || 'http://localhost:5781/api';
};

const http = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Content-Type': 'application/json',
    // Adicionar o token só se estiver disponível
    ...(localStorage.getItem('token') && { 'Authorization': `Token ${localStorage.getItem('token')}` }),
  }
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default http;