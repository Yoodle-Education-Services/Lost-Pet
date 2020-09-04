const mongoose = require('mongoose');
const petcustomerSchema = new mongoose.Schema({

        // here goes the schema of the petcustomers


        firstName: {
            type: String
           // required: true
        },

        lastName: {
            type: String,
            required: true
            
        },
        email: {
            type: String
        },
        
        phone: {
            type: Number
            
        },
        petName: {
            type: String

        },
        breed: {
            type: String

        },

        description: {
            type: String

        },

        // moreInfo: {
        //     type: String,
        //     required: true
        // },
        location: {
            type: String

        }
     
        
      });
          
module.exports = mongoose.model('Petcustomer', petcustomerSchema);
