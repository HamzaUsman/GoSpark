/**
 * Reviews.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    review_id: {
      type: 'integer'
    },
    user_id: {
      type: 'integer'
    },
    business_id: {
      type: 'integer'
    },
    text: {
      type: 'text'
    },
    rating: {
      type: 'integer'
    },
    date: {
      type: 'date'
    }
  }
};

