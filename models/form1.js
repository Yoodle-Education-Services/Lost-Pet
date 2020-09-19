
const mongoose = require(mongoose);
const Schema = mongoose.Schema;
const form1Schema = new Schema({
    firstName: String,
    lastName: String,
    phone: Number,
    email: String,
    petName: string,
    bread: string,
    description,
    city: string,
    location,
    lat,
    lng,
    moreInfo    

});
module.export = mongoose.model('Form1, form1Schema');