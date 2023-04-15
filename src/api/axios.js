import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.tobias-hopp.de/common/v1/'
});