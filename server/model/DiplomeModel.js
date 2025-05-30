const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DiplomeSchema=new Schema({
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

module.exports = mongoose.model('Diplome',DiplomeSchema)

