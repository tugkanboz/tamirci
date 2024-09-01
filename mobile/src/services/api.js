import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

export const getTechnicians = async () => {
  const response = await axios.get(`${API_URL}/technicians`);
  return response.data;
};

export const getTechnicianById = async (id) => {
  const response = await axios.get(`${API_URL}/technicians/${id}`);
  return response.data;
};