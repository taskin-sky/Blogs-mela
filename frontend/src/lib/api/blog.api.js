import { axios_instance } from '../axios/axios-instance';

export const createBlogAPI = async ({ data }) => {
  // console.log('API call with data:', data);

  // // Check what's in the FormData
  // for (let pair of data.entries()) {
  //   console.log(`FormData - ${pair[0]}:`, pair[1]);
  // }

  try {
    const response = await axios_instance.post('/create-blog', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('API response:', response.data);
    return response.data.data;
  } catch (error) {
    console.error('API error details:', error.response?.data);
    throw error;
  }
};
export const getAllBlogsAPI = async () => {
  const response = await axios_instance.get('/all-blogs');
  return response.data.data;
};

export const getBlogDetailsAPI = async ({ blogId }) => {
  const response = await axios_instance.get(`/single-blog/${blogId}`);
  return response.data.data;
};

export const deleteBlogAPI =  async ({blogId}) => {
  const response = await axios_instance.delete(`/delete-blog/${blogId}`);
  return response;
}

