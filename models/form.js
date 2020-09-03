
const mongoose = require(mongoose);
const Schema = mongoose.Schema;
const FormSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    tel: Number,
    city: string,
    ref: Form
});
module.export = mongoose.model('Form, FormSchema');