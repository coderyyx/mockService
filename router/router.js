var express = require("express");

var router = express.Router();

var handler = require('../controller/handler.js');

//register
handler.map(item =>{
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

module.exports=router;