const axios = require('axios');

const bling = axios.create({
  baseURL: 'bling.com.br/Api/v2',
});

export default bling;
