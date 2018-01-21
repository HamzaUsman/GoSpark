/**
 * Gallery.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    gallery_id: {
      type: 'integer'
    },
    banner_image: {
      type: 'string',
            size: 45
    },
    photos: {
      type: 'string'
    }
  }
};

