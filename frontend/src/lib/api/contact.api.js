import { axios_instance } from '../axios/axios-instance';

export const createContactAPI = async ({ data }) => {
  try {
    const response = await axios_instance.post('/create-contact', data);
    return response.data.data;
  } catch (error) {
    console.error('API error details:', error.response?.data);
    throw error;
  }
};
