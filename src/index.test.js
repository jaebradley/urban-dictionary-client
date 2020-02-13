import axios from 'axios';
import { search } from './index';

jest.setTimeout(20000);

describe('UrbanDictionaryClient', () => {
  describe('search', () => {
    describe('integration test', () => {
      it('should get search results', async () => {
        const response = await search('urban dictionary');
        expect(response).not.toBeUndefined();
        expect(response).toEqual(expect.objectContaining({
          list: expect.any(Array),
        }));
      });
    });

    describe('unit test', () => {
      const term = 'term';
      const value = { data: 'value' };
      let getSpy;

      beforeEach(() => {
        getSpy = jest.spyOn(axios, 'get').mockReturnValue(Promise.resolve(value));
      });

      afterEach(() => {
        getSpy.mockRestore();
      });

      it('should get search results', async () => {
        const response = await search(term);
        expect(response).toEqual('value');
        expect(getSpy).toHaveBeenCalledTimes(1);
        expect(getSpy).toHaveBeenCalledWith('https://api.urbandictionary.com/v0/define', { params: { term } });
      });
    });
  });
});
