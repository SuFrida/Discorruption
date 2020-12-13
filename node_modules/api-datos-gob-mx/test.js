const assert = require('assert');
const api = require('./index');

describe('Test to api open data', () => {
  it('should resolver catalog', async () => {
    for (const service in api) {
      if (api.hasOwnProperty(service)) {
        console.log('service ', service);

        const res = await api[service]();
        console.log('res ', res);
        assert(res);
      }
    }
  });
});
