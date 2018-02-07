var express = require("express");
var app=express();

//Router
var router = require('./router/router.js');

//middleware
app.use(function (req, res, next) {
    console.log('Time: %d', Date.now());
    next();
  })

app.use(router);

app.listen(8084);
