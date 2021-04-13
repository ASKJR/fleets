import { volvo as axios } from '../axios';

const VolvoApiService = {
  async save(endpoint, data) {
    try {
      await axios.post(endpoint, data);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async get(endpoint) {
    try {
      const response = await axios.get(endpoint);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};

export default VolvoApiService;
