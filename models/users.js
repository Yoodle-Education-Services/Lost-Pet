const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
   username: {type: String, unique: true},
   password: {type: String},
   firstName: String,
   lastName: String
});

 var User = mongoose.model('myuser', userSchema)
module.exports = User;
