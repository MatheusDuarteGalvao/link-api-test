const axios = require('axios');

const bling = axios.create({
  baseURL: 'https://bling.com.br/Api/v2',
  timeout: 10000,
});

module.exports = bling;
