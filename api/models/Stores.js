/**
 * Stores.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    store_id: {
      type: 'integer'
    },
    business_id: {
      type: 'integer'
    },
    location_id: {
      type: 'integer'
    },
    name: {
      type: 'string',
            size: 45
    },
    address: {
      type: 'string',
            size: 45
    }
  }
};

