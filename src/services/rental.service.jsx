import axios from 'axios';
import { getToken } from '../utils/auth.utils';

const API_URL = 'http://localhost:3000/api/rentals';

const rentCar = async (rentalData) => {
  const token = getToken();
  const response = await axios.post(`${API_URL}`, rentalData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

const makePayment = async (paymentData) => {
  const token = getToken();
  const response = await axios.post(`${API_URL}/payment`, paymentData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};

export { rentCar, makePayment };