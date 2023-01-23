const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Object Schema
const ItemSchema = mongoose.Schema({
    name : {
        type : 'string',
        required : true
    },
    date : {
        type : 'date',
        default : Date.now()
    }
});

module.exports = Item = mongoose.model("item", ItemSchema);