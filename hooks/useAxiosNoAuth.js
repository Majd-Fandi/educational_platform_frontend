import axios from 'axios';
import config from '@/configuration/config';

const useAxiosNoAuth = () => {

    const axiosInstance = axios.create({
        baseURL: config.api_host,
    });

    return axiosInstance;
};

export default useAxiosNoAuth;


