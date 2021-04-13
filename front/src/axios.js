import axios from 'axios';
import { VOLVO_API_BASE_URL, TIMEOUT } from './helper/const';

export const volvo = axios.create({
  baseURL: VOLVO_API_BASE_URL,
});

volvo.defaults.timeout = TIMEOUT;

export default {
  volvo,
};
