import axios from 'axios';

export default axios.create({
    baseURL:'https://worried-sheelah-cheryl-codes-a799c295.koyeb.app',
    // baseURL:'http://localhost:8080',
    headers: {"ngrok-skip-browser-warning": "true"}
});
//the config above is to prevent our client Http requests from being blocked by cors error