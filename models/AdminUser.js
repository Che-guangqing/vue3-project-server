const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username:{type:String},
    password:{
        type:String,
        select:false,  //查询时不要查出密码 否则会在编辑页面再次散列加密
        set(val) {
            // npm i bcrypt  对密码进行加密
           return require('bcrypt').hashSync(val,10)
    }}
})
module.exports = mongoose.model('AdminUser', schema)