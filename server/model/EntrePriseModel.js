const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EntrePriseSchema=new Schema({
    name:{
        type : String,
        required:true,
    },
    image:{
        type : String,
        required:true,
    },
    desc:{
        type : String,
        required:true,
    }
})

module.exports = mongoose.model('EntrePrise',EntrePriseSchema)

