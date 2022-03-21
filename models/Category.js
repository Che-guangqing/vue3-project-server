const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    parent: {
        // 上级分类的数据关联到分类列表
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category'
    }
})
module.exports = mongoose.model('Category', schema) 