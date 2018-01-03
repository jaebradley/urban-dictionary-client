import axios from 'axios';

class UrbanDictionaryClient {
  static search(term) {
    return axios.get('https://api.urbandictionary.com/v0/define', { params: { term } });
  }
}

export default UrbanDictionaryClient;
