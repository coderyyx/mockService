var express = require("express");
var fs=require('fs');
var path = require("path");
var router = express.Router();

var handler = require('../controller/handler.js');

var files = fs.readdirSync(path.join(__dirname,"../controller"));

var js_files = files.filter((f)=>{
    return f.endsWith('.js');
});

for(var f of js_files){
    let handlerList = require('../controller/' + f);

    //register
    handlerList.map(item =>{
        let {method,url,handler} = item;
        console.log(JSON.stringify(item))
        switch (method.toLocaleLowerCase()) {
            case 'get':
                router.get(url,handler);
                console.log(method+":"+url);
                break;
            case 'post':
                router.post(url,handler);
                console.log(method+":"+url);
            default:
                break;
        }
    })
}

module.exports=router;