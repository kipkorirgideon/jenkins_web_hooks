import mongoose from 'mongoose'
const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model('Article', articleSchema)