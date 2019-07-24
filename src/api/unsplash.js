import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
        'Client-ID c2d6f4b4633c5bc33b12f3d5f93a18c8f97eb9be05bdfcedb04ac7389b1626a8'
    }
});
