const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title:{type:String},
    categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
    times:{type:String},
    img: { type: String }
},{
    timestamps:true
})
module.exports = mongoose.model('Video', schema, 'videos')