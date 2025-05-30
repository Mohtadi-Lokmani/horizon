const mongoose = require('mongoose')
const { default: isEmail } = require('validator/lib/isEmail')

const Schema = mongoose.Schema

const ContactSchema=new Schema({
    nom:{
        type : String,
        required:true,
    },
    prenom:{
        type : String,
        required:true,
    },
    email:{
        type : String,
        required:true,
    },
    telephone:{
        type : Number,
        required:true,
    },
    message:{
        type : String,
        required:true,
    }
})

module.exports = mongoose.model('Contact',ContactSchema)

