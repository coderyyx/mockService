var fs=require('fs');
var path = require("path");

function applySubmit(req,res){
    var data = fs.readFileSync(path.join(__dirname,'../mockJson/applyCases.json'),"utf-8");
    console.log(data);
    res.send(data);
}

module.exports = [
    {
        method:'get',url:'/applySubmit',handler:applySubmit
    }
]