const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ContinueSchema=new Schema({
    name:{
        type : String,
        required:true,
    },
    image:{
        type : String,
        required:true,
    },
    formateur:{
        type : String,
        required:true,
    },
    empl:{
        type : String,
        required:true,
    }
})

module.exports = mongoose.model('Continue',ContinueSchema)

