import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://192.168.1.6:8000/api';

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