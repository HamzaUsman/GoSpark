

module.exports = {

  attributes: {

  user_id: {
   	   //required: true,
   	   type: 'integer'
         
   },
   first_name: {
   	   //required: true,
   	   type: 'string',
            size: 45
   },
   last_name: {
   	   //required: true,
   	   type: 'string'

   },
   email: {
   	   //required: true,
   	   type: 'string',
         unique: true

   },
   password: {
   	   //required: true,
   	   type: 'string'

   },
   gender: {
   	   //required: true,
   	   type: 'string'

   },
   date_of_birth: {
   	   //required: true,
   	   type: 'date'

   }  

  }
};

