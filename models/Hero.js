const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    avatar: { type: String },
    banner: { type: String },
    title:{type:String},
    categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
    scores: { // 各个属性
        difficult:{type:Number},
        skills:{type:Number},
        attack:{type:Number},
        survive:{type:Number},
    },
    skills:[{ // 技能
        icon:{type:String},
        name:{type:String},
        description:{type:String},
        tips:{type:String},
        delay:{type:String},
        cost:{type:String},
        // 1：主升 2：次升 3：都不是
        isMajor:{type:Number},
    }],
    // 召唤师技能
    callSkills:[{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}],
    // 顺风装备
    items1:[{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}],
    // 逆风装备
    items2:[{type:mongoose.SchemaTypes.ObjectId,ref:'Item'}],
    usegeTips:{type:String}, // 使用技巧
    battleTips:{type:String}, // 对抗技巧
    teamTips:{type:String}, // 团战思路
    partners:[{ // 最佳搭档
        hero:{type:mongoose.SchemaTypes.ObjectId,ref:'Hero'},
        description:{type:String}
    }],
    controlWho:[{ // 克制谁
        hero:{type:mongoose.SchemaTypes.ObjectId,ref:'Hero'},
        description:{type:String}
    }],
    byWhoControl:[{ // 被谁克制
        hero:{type:mongoose.SchemaTypes.ObjectId,ref:'Hero'},
        description:{type:String}
    }],
    skin:[{ // 皮肤
        img:{type:String},
        name:{type:String},
    }]



})
module.exports = mongoose.model('Hero', schema, 'heroes')
// 第三个参数指定集合名称