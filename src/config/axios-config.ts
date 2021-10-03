import axios from 'axios'

// @ts-ignore
import COMMON from '../../secret/secret.json'

axios.defaults.baseURL = COMMON.IP

// axios.defaults.timeout = 50000

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
