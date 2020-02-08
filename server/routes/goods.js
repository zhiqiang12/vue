var express =require('express');
var router =express.Router();
var mongoose =require('mongoose');
var Goods =require('../models/goods');
//连接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/db_demo');

mongoose.connection.on('connected',function(){
    console.log('MongoDB connected success.')//连接
});

mongoose.connection.on('error',function(){
    console.log('MongoDB connected fail.')//失败
});

mongoose.connection.on('disconnected',function(){
    console.log('MongoDB connected disconnected.')//断开
});

router.get('/',function(req,res,next){
    let page =parseInt(req.param('page'));//分页
    let pageSize =parseInt(req.param('pageSize'));
    let sort =req.param('sort');
    let skip =(page-1)*pageSize;//页数
    let params={};
    let goodsModel =Goods.find(params).skip(skip).limit(pageSize);//查找所有数据
    goodsModel.sort({'salePrice':sort})//排序
    goodsModel.exec(function(err,doc){//文档
        if(err){
            res.json({
                status:'1',
                msg:err.message
            });
        }else{
            res.json({
                status:'0',
                msg:'',
                result:{
                    count:doc[0].length,
                    list:doc[0]
                }
            })
        }
    })
    // res.send('dkfjggjfd')
})
module.exports =router;