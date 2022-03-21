module.exports = options => {
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const AdminUser = require('../models/AdminUser')

    return async (req, res, next) => {
        // 中间件 限制用户只能在登陆之后访问这个路由
        // 获取前端传的请求头authorization中的token
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token,401,'请提供jwt token')

        // verify方法 解密token 得到token中存储的用户信息的id
        const {id} = jwt.verify(token, req.app.get('secret'))
        assert(token,401,'无效的jwt token')

        // 通过id找用户信息 挂在到req中让后续使用
        req.user = await AdminUser.findById(id)
        // console.log(req.user)
        //确保用户信息验证正确
        assert(req.user,'401','请先登陆')
        
        await next()
    }

}