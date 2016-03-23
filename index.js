var axios = require('axios');

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/videos';

module.exports = function (options, callback) {
  if (!options.id) {
    throw new Error('Youtube Video expected id, received undefined');
  }

  var params = {
    part: 'snippet',
    id: options.id
  };

  axios.get(ROOT_URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.items); }
    })
    .catch(function(error) {
      console.error(error);
    });
};
