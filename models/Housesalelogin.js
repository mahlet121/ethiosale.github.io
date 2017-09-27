var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HouseSaleLoginSchema = new Schema({
    email: {
        type: String,
        
        required: true
    },

    password: {
        type: String,
        
        lowercase: true,
        required: true
    },
    userID: {
        type: String,
        
        required: true
    }
});

var Housesalelogin = mongoose.model('Housesalelogin', HouseSaleLoginSchema);

module.exports = Housesalelogin;