const request = require("request-promise");

const Resolvers = {
  Query: {
    findPetsByStatus: function (options) {
      return request(options, "http://petstore.swagger.io/v2");
    },
    findPetsByTags: function (options) {
      return request(options, "http://petstore.swagger.io/v2");
    },
    getPetById: function (options) {
      return request(options, "http://petstore.swagger.io/v2");
    },
    getInventory: function (options) {
      return request(options, "http://petstore.swagger.io/v2");
    },
    getOrderById: function (options) {
      return request(options, "http://petstore.swagger.io/v2");
    },
    loginUser: function (options) {
      return request(options, "http://petstore.swagger.io/v2");
    },
    logoutUser: function (options) {
      return request(options, "http://petstore.swagger.io/v2");
    },
    getUserByName: function (options) {
      return request(options, "http://petstore.swagger.io/v2");
    }
  }
};
module.exports = Resolvers;