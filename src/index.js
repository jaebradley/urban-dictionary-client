import axios from 'axios';

const API_BASE_PATH = 'https://api.urbandictionary.com';

const autocompleteExtra = (term) => axios.get(`${API_BASE_PATH}/v0/autocomplete-extra`, { params: { term } }).then((response) => response.data);
const search = (term) => axios.get(`${API_BASE_PATH}/v0/define`, { params: { term } }).then((response) => response.data);

export {
  autocompleteExtra,
  search,
};
