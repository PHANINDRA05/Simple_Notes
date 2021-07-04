const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const new_Schema = new Schema({
    title:{
        type : String,
        required : true,
    },
    type:{
        type : String,
        required : true,
    },
    domain:{
        type : String,
        
    },
    contributer_id:{
        type:String,
        required:true,
    },
    document_id:{
        type : String,
        required : true,
    },
    document_url:{
        type : String,
        required : true,
    },
},{timestamps:true});
const notes = mongoose.model('notes',new_Schema);
module.exports = notes;