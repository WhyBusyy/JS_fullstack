import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL, //환경변수로부터도 읽어올 수있음... .env
    timeout: 10000, //요청 이후 언제까지 기다릴건지
    headers: {
        'Content-Type': 'application/json'
    }
});

export default instance;