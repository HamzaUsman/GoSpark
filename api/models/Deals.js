/**
 * Deals.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    
    deal_id: {
      type: 'integer'
    },


    business_id: {
      type: 'integer'
    },


    description: {
      type: 'text'
    },


    image: {
      type: 'string'
    },


    name: {
      type: 'string'
    },


    start_date: {
      type: 'date'
    },


    expiry_date: {
      type: 'date'
    },


    unit_price: {
      type: 'float'
    },


    in_currency: {
      type: 'string',
      enum: ['PKR', 'USD']
    },


    coupon_code: {
      type: 'string'
    }


  }
};

