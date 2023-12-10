import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://172.29.0.1:8000/api';

const connectionApi = axios.create({ baseURL });

connectionApi.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
        if (token) {
          config.headers['token'] = token;
        }
        return config;
      }
);

export default connectionApi;