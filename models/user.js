const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    }
    //we will only define email for now because password and username will be handled by passport-local-mongoose
});
userSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', userSchema);