module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    // const Article = require('../../models/Article')
    const Category = mongoose.model('Category')
    const Article = mongoose.model('Article')
    const Hero = mongoose.model('Hero')
    const Ad = mongoose.model('Ad')
    const Video = mongoose.model('Video')

    // 导入新闻数据
    router.get('/news/init', async (req, res) => {
        await Article.deleteMany({})
        const parent = await Category.findOne({
          name: '新闻分类'
        })
        const cats = await Category.find().where({
          parent: parent
        }).lean()
        const newsTitles =  [
          "2021元歌皮肤设计大赛开启公告！",
          "12月3日体验服停机更新公告",
          "狄某有话说 |21年倒计时，11月峡谷数据变化盘点！",
          "11月30日全服不停机更新公告",
          "斗鱼暖冬福利庆典，限时领取专属头像框",
          "2021元歌皮肤设计大赛开启公告！",
          "虎牙雷霆战队定级赛福利大放送，海量豪礼等你来领！",
          "王者零距离·广州站 活动重启说明",
          "12月2日，欢聚大仙生日会，惊喜好礼抽不停",
          "狄某有话说 |21年倒计时，11月峡谷数据变化盘点！",
          "12月3日体验服停机更新公告",
          "12月3日全服不停机更新公告",
          "王者零距离·广州站 活动重启说明",
          "12月2日鹰眼护卫队玩家身份功能异常说明",
          "12月2日全服不停机更新公告",
          "2021元歌皮肤设计大赛开启公告！",
          "【共赴花期】领表情头像框活动开启公告",
          "王者创意互动周好礼来袭 嫦娥-拒霜思限时秒杀",
          "【共赏芳华-必得皮肤天幕】活动开启公告及FAQ",
          "初冬时节小雪天，共赏芳华祈丰年",
          "KPL预报丨重庆狼队战长沙TES.A，狼人已睁眼，滔博请注意",
          "KPL预报丨佛山GK再战大魔王武汉eStar，首个四强名额属于谁？",
          "KPL预报丨冤家路窄，MTG季后赛遭遇深圳DYG谁能取胜？",
          "冠军出炉——第四届王者荣耀全国大赛赛区联赛完赛！",
          "KPL预报丨季后赛揭幕，济南RW侠、成都AG生死战！"
        ]
        const newsList = newsTitles.map(title => {
          const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
          return {
            categories: randomCats.slice(0, 2),
            title: title
          }
        })
        await Article.insertMany(newsList)
        res.send(newsList)
    })

    // 新闻列表接口
    router.get('/news/list', async (req, res) => {
        // const parent = await Category.findOne({
        //   name: '新闻分类'
        // }).populate({
        //   path: 'children',
        //   populate: {
        //     path: 'newsList'
        //   }
        // }).lean()
        const parent = await Category.findOne({
            name: '新闻分类'
        })
        const cats = await Category.aggregate([{
            $match: {
                parent: parent._id
            }
        },
        {
            $lookup: {
                from: 'articles',
                localField: '_id',
                foreignField: 'categories',
                as: 'newsList'
            }
        },
        // 添加一个字段， 但在上一步lookup时候已经添加了，但是newsList是把所有分类关联的新闻都找出来了，
        // 在首页显示的每个分类的新闻只要五条，所以取五条
        {
            $addFields: { 
                newsList: {
                    $slice: ['$newsList', 5]
                }
            }
        }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name: '热门',
            newsList: await Article.find().where({
                categories: {
                    $in: subCats
                }
            }).populate('categories').limit(5).lean()
        })

        cats.map(cat => {
            cat.newsList.map(news => {
                news.categoryName = (cat.name === '热门') ?
                    news.categories[0].name : cat.name
                return news
            })
            return cat
        })
        res.send(cats)

    })

    // 导入英雄数据
    router.get('/heroes/init', async (req, res) => {
        await Hero.deleteMany({})
        const rawData = [
          {
          "name": "热门",
          "heroes": [
            {name: '妲己', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg'},
            {name: '鲁班七号', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg'},
            {name: '铠', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg'},
            {name: '孙悟空', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg'},
            {name: '亚瑟', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg'},
            {name: '后羿', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg'},
            {name: '安琪拉', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg'},
            {name: '瑶', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg'},
            {name: '孙尚香', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg'},
            {name: '甄姬', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg'},
            ]
          }, 
          {
            "name": "战士",
            "heroes": [
              {name: '赵云', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg'},
              {name: '墨子', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg'},
              {name: '钟无艳', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg'},
              {name: '吕布', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg'},
              {name: '夏侯惇', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg'},
              {name: '曹操', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg'},
              {name: '典韦', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg'},
              {name: '宫本武藏', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg'},
              {name: '达摩', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg'},
              {name: '老夫子', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg'},
              {name: '关羽', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg'},
              {name: '程咬金', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg'},
              {name: '露娜', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg'},
              {name: '花木兰', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg'},
              {name: '橘右京', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg'},
              {name: '亚瑟', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg'},
              {name: '孙悟空', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg'},
              {name: '刘备', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg'},
              {name: '杨戬', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg'},
              {name: '雅典娜', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg'},
              {name: '哪吒', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg'},
              {name: '铠', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg'},
              {name: '苏烈', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg'},
              {name: '梦奇', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg'},
              {name: '裴擒虎', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg'},
              {name: '狂铁', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg'},
              {name: '孙策', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg'},
              {name: '李信', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg'},
              {name: '盘古', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg'},
              {name: '云中君', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg'},
              {name: '曜', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg'},
              {name: '马超', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg'},
              {name: '蒙恬', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg'},
              {name: '夏洛特', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/536/536.jpg'},
              {name: '司空震', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/537/537.jpg'},
              {name: '云缨', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg'},
            ]
          }, 
          {
            "name": "法师",
            "heroes": [
               {name: '小乔', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg'},
               {name: '墨子', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg'},
               {name: '妲己', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg'},
               {name: '嬴政', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg'},
               {name: '高渐离', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg'},
               {name: '孙膑', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg'},
               {name: '扁鹊', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg'},
               {name: '芈月', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg'},
               {name: '周瑜', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg'},
               {name: '甄姬', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg'},
               {name: '武则天', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg'},
               {name: '貂蝉', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg'},
               {name: '安琪拉', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg'},
               {name: '露娜', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg'},
               {name: '姜子牙', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg'},
               {name: '王昭君', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg'},
               {name: '张良', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg'},
               {name: '不知火舞', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg'},
               {name: '钟馗', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg'},
               {name: '诸葛亮', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg'},
               {name: '干将莫邪', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg'},
               {name: '女娲', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg'},
               {name: '杨玉环', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg'},
               {name: '弈星', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg'},
               {name: '米莱狄', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg'},
               {name: '司马懿', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg'},
               {name: '沈梦溪', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg'},
               {name: '上官婉儿', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg'},
               {name: '嫦娥', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg'},
               {name: '西施', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/523/523.jpg'},
               {name: '司空震', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/537/537.jpg'},
               {name: '金蝉', avatar: 'https://game.gtimg.cn/images/yxzj/img201606/heroimg/540/540.jpg'},
            ]
          }, 
          {
            "name": "坦克",
            "heroes": [{
              "name": "廉颇",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg"
            }, {
              "name": "刘禅",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg"
            }, {
              "name": "白起",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg"
            }, {
              "name": "夏侯惇",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg"
            }, {
              "name": "项羽",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg"
            }, {
              "name": "程咬金",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg"
            }, {
              "name": "刘邦",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg"
            }, {
              "name": "牛魔",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg"
            }, {
              "name": "张飞",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg"
            }, {
              "name": "东皇太一",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg"
            }, {
              "name": "苏烈",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg"
            }, {
              "name": "梦奇",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg"
            }, {
              "name": "孙策",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg"
            }, {
              "name": "猪八戒",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg"
            }]
          }, {
            "name": "刺客",
            "heroes": [{
              "name": "阿轲",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg"
            }, {
              "name": "李白",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg"
            }, {
              "name": "韩信",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg"
            }, {
              "name": "兰陵王",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg"
            }, {
              "name": "娜可露露",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg"
            }, {
              "name": "橘右京",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg"
            }, {
              "name": "百里玄策",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg"
            }, {
              "name": "裴擒虎",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg"
            }, {
              "name": "元歌",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg"
            }, {
              "name": "司马懿",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg"
            }, {
              "name": "云中君",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg"
            }]
          }, {
            "name": "射手",
            "heroes": [{
              "name": "孙尚香",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg"
            }, {
              "name": "鲁班七号",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg"
            }, {
              "name": "马可波罗",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg"
            }, {
              "name": "狄仁杰",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg"
            }, {
              "name": "后羿",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
            }, {
              "name": "李元芳",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg"
            }, {
              "name": "虞姬",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg"
            }, {
              "name": "成吉思汗",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg"
            }, {
              "name": "黄忠",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg"
            }, {
              "name": "百里守约",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg"
            }, {
              "name": "公孙离",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg"
            }, {
              "name": "伽罗",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg"
            }]
          }, {
            "name": "辅助",
            "heroes": [{
              "name": "庄周",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg"
            }, {
              "name": "孙膑",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg"
            }, {
              "name": "蔡文姬",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg"
            }, {
              "name": "太乙真人",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg"
            }, {
              "name": "大乔",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg"
            }, {
              "name": "鬼谷子",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg"
            }, {
              "name": "明世隐",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg"
            }, {
              "name": "盾山",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg"
            }, {
              "name": "瑶",
              "avatar": "https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg"
            }]
          }]
        for (let cat of rawData) {
            if (cat.name === '热门') {
                continue
            }
            // 找到当前分类在数据库中对应的数据
            const category = await Category.findOne({
                name: cat.name
            })
            cat.heroes = cat.heroes.map(hero => {
                hero.categories = [category]
                return hero
            })
            // 录入英雄
            await Hero.insertMany(cat.heroes)
        }

        res.send(await Hero.find())
    })

    // 英雄列表接口 
    router.get('/heroes/list', async (req, res) => {
        // 找到父级分类
        const parent = await Category.findOne({
            name: '英雄分类'
        })
        console.log(parent);
        // 聚合查询：程序看来只有一个查询
        const cats = await Category.aggregate([
            // 条件查询：parent: parent._id
            { $match: {  parent: parent._id } },
            // 关联查询
            {
                $lookup: {
                    from: 'heroes', // 关联表集合
                    localField: '_id', // 本地字段
                    foreignField: 'categories', // 外键字段（heroes里面）
                    as: 'heroList' // 查询到后作为什么名称
                }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name: '热门',
            heroList: await Hero.find().where({
                categories: {
                    $in: subCats
                }
            }).limit(10).lean()
        })
        res.send(cats)
    });
    // 视频数据
    router.get('/video/list', async (req, res) => {
        // 找到父级分类
        const parent = await Category.findOne({
            name:'视频分类'
        })
        const cats = await Category.aggregate([
            // 条件查询：parent: parent._id
            { $match: {  parent: parent._id } },
            // 关联查询
            {
                $lookup: {
                    from: 'videos', // 关联表集合
                    localField: '_id', // 本地字段
                    foreignField: 'categories', // 外键字段（heroes里面）
                    as: 'videoList' // 查询到后作为什么名称
                }
            },
            {
                $addFields: { 
                    videoList: {
                        $slice: ['$videoList', 4]
                    }
                }
            }
        ])
        // const video = await Video.find().populate('categories').limit()
        res.send(cats)
    })
    // 广告位
    router.get('/ads/list/:name', async (req, res) => {
        // console.log(req.params.name)
        const ads = await Ad.findOne({name:req.params.name})
        res.send(ads)
    })
    // 文章详情
    router.get('/articles/:id', async (req, res) => {
        const data = await Article.findById(req.params.id).lean()
        data.related = await Article.find().where({
            categories: {
                $in: data.categories
            }
        }).limit(2)
        res.send(data)
    })
    // 英雄详情
    router.get('/heroes/:id', async (req, res) => {
        const data = await Hero
            .findById(req.params.id)
            .populate('categories callSkills items1 items2 partners.hero byWhoControl.hero controlWho.hero')
            .lean()
        res.send(data)
    })    
    app.use('/web/api', router)
}

// 在官网获取英雄分类及英雄信息
// $$('.hero-nav > li').map(li => li.innerText)
// $$('.hero-nav > li').map((li, i) => { return { name:li.innerText, heroes: $$('li', $$('.hero-list')[i]).map(el => { return {name: $$('h3', el)[0].innerHTML , avatar:$$('img', el)[0].src  } } ) }})
// 在官网获取新闻信息
// $$('.news_list .title').map(el => el.innerHTML).slice(5)
