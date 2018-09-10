var express = require('express');
var app = express();
const path = require('path');
var axios =require("axios");
var bodyParser = require("body-parser");
 var cookieParser = require('cookie-parser');

  app.use(cookieParser())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// 配置请求路劲

let API = "http://192.168.17.16:48080/license-admin";
axios.defaults.baseURL = API;




app.use("/",require("./router/router.js"))
app.use("/", require("./router/manage.js"))



var server = app.listen(7777,function(){
  console.log("localhost:7777")
})