var fs=require('fs');
var path = require("path");

function applySubmit(req,res){
    var data = fs.readFileSync(path.join(__dirname,'../mockJson/applyCases.json'),"utf-8");
    res.send(data);
}

//疾病列表
function getDisease(req,res){
    var data = fs.readFileSync(path.join(__dirname,'../mockJson/disease.json'),"utf-8");
    res.send(data);
}

module.exports = [
    {
        method:'get',url:'/applySubmit',handler:applySubmit
    },
    {
        method:'post',url:'/genetic/getDiseases',handler:getDisease
    }
]