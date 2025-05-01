import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// obține date protejate
export const getUserProfile = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/users/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
