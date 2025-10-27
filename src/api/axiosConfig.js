import axios from 'axios';

export default axios.create({
  baseURL: 'https://unfarmable-aphidious-young.ngrok-free.dev', 
  headers: { "ngrok-skip-browser-warning": "true" }
});
