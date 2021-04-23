import axios from 'axios';
import {toast} from 'react-toastify';
import logger from './logService';


//Note that backend doesnt require jsx
axios.interceptors.response.use(null, error => {
const expectedError = error.response && error.response.status>= 400 
                    && error.response.status <500

    if (!expectedError) {
        logger.log(error);
        console.log('logging the error', error)
        toast.error('Unexpected error occured')
    }
    return Promise.reject(error);
})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};