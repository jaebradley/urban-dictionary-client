import axios from 'axios';
import UrbanDictionaryClient from './urbanDictionaryClient';

describe('UrbanDictionaryClient', () => {
  describe('search', () => {
    describe('integration test', () => {
      it('should get search results', async () => {
        const response = await UrbanDictionaryClient.search('urban dictionary');
        expect(response.status).toBe(200);
        expect(response.data).not.toBeUndefined();
        expect(response.data).toEqual(expect.objectContaining({
          tags: expect.any(Array),
          result_type: expect.any(String),
          list: expect.any(Array),
          sounds: expect.any(Array),
        }));
      });
    });

    describe('unit test', () => {
      const term = 'term';
      const value = 'value';
      let getSpy;

      beforeEach(() => {
        getSpy = jest.spyOn(axios, 'get').mockReturnValue(value);
      });

      afterEach(() => {
        getSpy.mockRestore();
      });

      it('should get search results', async () => {
        const response = await UrbanDictionaryClient.search(term);
        expect(response).toEqual(value);
        expect(getSpy).toHaveBeenCalledTimes(1);
        expect(getSpy).toHaveBeenCalledWith('https://api.urbandictionary.com/v0/define', { params: { term } });
      });
    });
  });
});
