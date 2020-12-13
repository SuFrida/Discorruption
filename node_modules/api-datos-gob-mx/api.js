const request = require('request');
const { promisify } = require('util');

const apiUrl = 'https://api.datos.gob.mx/v1/';
const getRequest = promisify(request.get.bind(request));

const getApiCaller = (pathApi) => {
  let totalObtained = 0;
  const apiEndpoint = (qs = {}) => getRequest({
    uri: apiUrl + pathApi,
    qs,
  })
    .then(res => JSON.parse(res.body))
    .then(({
      error,
      details,
      pagination: {
        page,
        pageSize,
        total,
      },
      results,

    }) => {
      if (error) return Promise.reject(details);

      if (!results.length) return results;

      totalObtained += results.length;

      if (total <= totalObtained) return results;

      return results.concat(apiEndpoint({ page: page + 1 }));
    });

  return apiEndpoint;
};

module.exports = getApiCaller;
