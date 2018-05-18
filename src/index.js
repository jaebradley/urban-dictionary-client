import axios from 'axios';

const search = term => axios.get('https://api.urbandictionary.com/v0/define', { params: { term } }).then(response => response.data);

export { search }; // eslint-disable-line
