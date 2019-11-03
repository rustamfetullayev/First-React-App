import axios from 'axios';

const first_server = axios.create({
    baseURL: 'https://react-first-app-1cd12.firebaseio.com'
})

export default first_server;