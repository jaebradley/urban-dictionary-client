import axios from 'axios';

class UrbanDictionaryClient {
  static async search(term) {
    return axios.get('https://api.urbandictionary.com/v0/define', { params: { term } });
  }
}

export default UrbanDictionaryClient;
