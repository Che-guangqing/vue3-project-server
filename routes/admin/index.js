module.exports = app => {
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const AdminUser = require('../../models/AdminUser')
    const router = express.Router({
        mergeParams: true
    })
    // const Category = require('../../models/Category')
    // npm i inflection   处理类名 

    // 创建资源
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })
    // 更新资源
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    // 资源列表
    router.get('/', async (req, res) => {
        // 当模型是Category时需要查询关联的数据 
        const queryOptions = {}
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(100)

        // const items = await req.Model.find().populate('parent').limit(10)
        res.send(items)
    })
    // 详情数据
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
    // 删除资源
    router.delete('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: 'true'
        })
    })

    // 登陆校验中间件
    const auth =  async (req, res, next) => {
        // 中间件 限制用户只能在登陆之后访问这个路由
        // 获取前端传的请求头authorization中的token
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token,401,'请先登陆')

        // verify方法 解密token 得到token中存储的用户信息的id
        const {id} = jwt.verify(token, app.get('secret'))
        assert(token,401,'请先登陆')

        // 通过id找用户信息 挂在到req中让后续使用
        req.user = await AdminUser.findById(id)
        // console.log(req.user)
        //确保用户信息验证正确
        assert(req.user,'401','请先登陆')
        await next()
    }

    // 处理增删改查通用接口
    app.use('/admin/api/rest/:resoure',auth, async (req, res, next) => {
        // 获取模型中间件
        const modelName = require('inflection').classify(req.params.resoure)
        console.log(modelName)  //Category
        req.Model = require(`../../models/${modelName}`)
        next()
    }, router)
    // 增删改查操作都差不多  所以写通用接口
    // :resoure可以动态传任何字段的接口 如：categories => Categorie 就可以找到模型


    // 图片接口
    // npm i multer  处理上传图片
    const multer = require('multer')
    const upload = multer({
        dest: __dirname + '/../../uploads'
    })
    app.post('/admin/api/upload',upload.single('file'), (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        // file.url = `http://改成线上地址/uploads/${file.filename}`
        res.send(file)
    })

    // 登陆
    app.post('/admin/api/login', async (req, res) => {
        // 
        const {
            username,
            password
        } = req.body
        // 1.根据用户名找用户
        // const AdminUser = require('../../models/AdminUser')
        const user = await AdminUser.findOne({
            username: username
        }).select('+password')
        // 用http-assert包
        assert(user, 422,'用户不存在')
        // 2.校验密码
        const isValid = require('bcrypt').compareSync(password, user.password)
        assert(isValid, 422,'密码错误')
        // 3.返回token
        // npm i jsonwebtoken
        // const jwt = require('jsonwebtoken')
        const token = jwt.sign({
            id: user._id
        }, app.get('secret'))
        res.send({
            token
        })
    })

    // npm i http-assert
    // assert(满足条件,'状态码','消息提示')

    // 错误处理
    app.use(async(err,req,res,next) => {
       res.status(err.statusCode || 500).send({
           message:err.message
       })
    })

    // console.log(require('bcrypt'));

    // AdminUser.insertMany([
    //     {username: 'cc', password: '123'}
    // ])

    // app.get('/mylists', async function(req, res){
    //     res.send(await AdminUser.find())
    // })
    
}