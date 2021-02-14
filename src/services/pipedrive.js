const axios = require('axios');

const pipedrive = axios.create({
  baseURL: 'https://api.pipedrive.com/v1',
});

module.exports = pipedrive;
