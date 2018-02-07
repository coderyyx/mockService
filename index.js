var express = require("express");
var app=express();
const port  = 8084;
//Router
var router = require('./router/router.js');

//middleware
app.use(function (req, res, next) {
    console.log('Time: %d', Date.now());
    next();
  })

app.use(router);

app.listen(port);
console.log(`listen on ${port},open browser on localhost:${port}`)
