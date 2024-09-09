import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost:8080',
    // baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
    headers: {"ngrok-skip-browser-warning": "true"}
});
//the config above is to prevent our client Http requests from being blocked by cors error