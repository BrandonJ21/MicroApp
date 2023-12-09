import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://192.168.1.84:8000/api';

const connectionApi = axios.create({ baseURL });

connectionApi.interceptors.request.use(
  async (config) => {
    const token = 'xd' // await AsyncStorage.getItem('token');
        if (token) {
          config.headers['token'] = token;
        }
        return config;
      }
);

export default connectionApi;