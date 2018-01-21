/**
 * Businesses.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
        
        user_id: {
        type: 'integer'
        
    },
    category_id: {
         type: 'integer'
    },
    membership_id: {
          type: 'integer'
    },
    gallery_id: {
      type: 'integr'
    },
    name: {
         type: 'integer'
    },
    description: {
           type: 'string'
    },
    contact_no: {
              type: 'string'
    },

    facebook_url: {
    	      type: 'string'
    },
    twitter_url: {
    	      type: 'string'
    },
    linkedin_url: {
    	      type: 'string'
    },
    website: {
    	      type: 'string'
    },
    opening_days: {
    	      type: 'string'
    },
    timings: {
    	      type: 'datetime'
    }




  }
};
