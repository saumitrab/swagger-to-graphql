'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Gofer = require('gofer');

var ApiClient = function (_Gofer) {
  (0, _inherits3.default)(ApiClient, _Gofer);

  function ApiClient(config) {
    (0, _classCallCheck3.default)(this, ApiClient);
    return (0, _possibleConstructorReturn3.default)(this, (ApiClient.__proto__ || (0, _getPrototypeOf2.default)(ApiClient)).call(this, config, 'apiclient'));
  }

  return ApiClient;
}(Gofer);

var config = {
  globalDefaults: {
    timeout: 3000,
    baseUrl: 'YOUR-BASE_URL',
    rejectUnauthorized: false,
    client_id: 'CLIENT-ID'
  }
};

ApiClient.prototype.addOptionMapper(function (options) {
  if (options.client_id) {
    if (!options.qs) {
      options.qs = {};
    }
    options.qs.client_id = options.client_id;
  }
});

var apiclient = new ApiClient(config);

module.exports = apiclient;