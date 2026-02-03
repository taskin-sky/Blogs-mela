import { axios_instance } from '../axios/axios-instance';

export const getAllBlogsAPI = async () => {
  const response = await axios_instance.get('/all-blogs');
  return response.data.data;
};

export const getBlogDetailsAPI = async ({ blogId }) => {
  const response = await axios_instance.get(`/single-blog/${blogId}`);
  return response.data.data;
};
