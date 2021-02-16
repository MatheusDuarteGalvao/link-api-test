const axios = require('axios');

const pipedrive = axios.create({
  baseURL: 'https://api.pipedrive.com/v1',
  timeout: 10000,
});

module.exports = pipedrive;

