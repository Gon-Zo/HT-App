import axios from 'axios'

// @ts-ignore
import COMMON from '../assets/secret.json'

axios.defaults.baseURL = COMMON.IP

axios.defaults.timeout = 10000

axios.interceptors.request.use(request => {
    console.log('request', request);
    // request.withCredentials = true;
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log('response', response);
    return response;
}, error => {
    return Promise.reject(error);
});
