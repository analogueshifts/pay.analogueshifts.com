import axios from 'axios';

// Create an Axios instance with default settings
const instance = axios.create({
    baseURL: 'https://api.analogueshifts.com', // Replace with your API's base URL
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// Optional: Set up interceptors for request and response
// Add a request interceptor
instance.interceptors.request.use(
    (config) => {
        // You can modify the request here, such as attaching tokens
        const token = localStorage.getItem('authToken'); // Get token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Attach token to headers
        }
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    (response) => {
        // Any status code that lies within the range of 2xx causes this function to trigger
        return response;
    },
    (error) => {
        // Any status codes that fall outside the range of 2xx cause this function to trigger
        // Handle response error
        return Promise.reject(error);
    }
);

export default instance;