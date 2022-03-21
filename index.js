const express = require('express')
const app = express()

app.set('secret','fg439f89hf')

app.use(require('cors')())  //跨域
app.use(express.json())   //为了支持req.body

// 打包后的项目静态文件托管
app.use('/',express.static(__dirname + '/web')) //移动端页面
app.use('/admin',express.static(__dirname + '/admin')) //后台页面

app.use('/uploads',express.static(__dirname + '/uploads')) //静态文件托管

require('./pligins/db')(app)
require('./routes/admin')(app)
require('./routes/web')(app)

app.listen(3000,() => {
    console.log('http://localhost:3000')
})