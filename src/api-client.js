'use strict';

const Gofer = require('gofer');

class ApiClient extends Gofer {
  constructor(config) {
    super(config, 'apiclient');
  }
}

const config = {
  globalDefaults: {
    timeout: 3000,
    baseUrl: 'YOUR-BASE_URL',
    rejectUnauthorized: false,
    client_id: 'CLIENT-ID'
  }
};

ApiClient.prototype.addOptionMapper(options => {
  if (options.client_id) {
    if (!options.qs) {
      options.qs = {};
    }
    options.qs.client_id = options.client_id;
  }
});

const apiclient = new ApiClient(config);

module.exports = apiclient;