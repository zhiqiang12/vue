var http =require('http');
http.get('http://www.imooc.com/u/card',function(res){
    let data='';
    res.on('data',function(chunk){
        data +=chunk;
    })
    res.on('end',function(){
        let result =JSON.parse(data);
        console.log('result:'+result.msg)//没有登录,获取不到数据
    })
})