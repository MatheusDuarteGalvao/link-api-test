import axios from 'axios';

const pipedrive = axios.create({
  baseURL: 'https://api.pipedrive.com/v1',
});

export default pipedrive;
