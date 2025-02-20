import axios from 'axios';
import { useAuth } from '@/contexts/AuthContext';
import config from '@/configuration/config';

const useAxiosAuth = () => {
    const { accessToken } = useAuth();

    const axiosInstance = axios.create({
        baseURL: config.api_host,
    });

    // include the access token in the header for each request that requires authentication
    axiosInstance.interceptors.request.use(
        (config) => {
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default useAxiosAuth;



// use case example:

// const MyComponent = () => {
//     const axiosAuth = useAxiosAuth();
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axiosAuth.get('/api/some-protected-endpoint/');
//                 console.log(response.data);
//             } catch (error) {
//                 console.error('Failed to fetch data:', error);
//             }
//         };

//         fetchData();
//     }, [axiosAuth]);