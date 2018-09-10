var express = require("express");
var router = express.Router();
var axios = require("axios");
// var cookieParser = require('cookie-parser');


router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin,No-Cache,X-Requested-With,If-Modified-Since,Pragma,Last-Modified,Cache-Control,Expires,Content-Type,X-E4M-With,userId,token");
  res.header("cache-control", "no-cache");
  res.header("content-type", "application/json; charset=utf-8");
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Max-Age', 0);
  res.header("ETag", '');
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
    /让options请求快速返回/
  } else {
    next();
  }
});

//   http://192.168.17.82:8080/license-admin/systemmodule/getsystemmodulelist


router.post('/login', function (req, res) {
  token = "";
  var str = "";
  req.on("data", function (dt) {
    str += dt
  })
  req.on("end", function () {
    axios.post("/user/token", JSON.parse(str))
      .then(data => {
        res.send(data.data)
      })
      .catch(err => {
        console.log(err)
      })
  })
});

router.get('/sider', function (req, res) {
 console.log("cookies:",req.cookies)
  axios.get("/systemmodule/getsystemmodulelist", {
      headers: {
        'token': req.headers.token
      }
    })
    .then(data => {

      res.send(data.data)
    })
    .catch(err => {
      let data = Object.assign({}, err.response)
      console.log(err.response);
      res.send("dasd");
    })


})
router.get('/cloudenterprise/listpage', function (req, res) {
  axios.get("/cloudenterprise/listpage", {
      params: req.query,
      headers: {
        'token': req.headers.token
      }
    })
    .then(data => {
      res.send(data.data)
    })
    .catch(err => {
      let data = Object.assign({}, err.response)

      let obj = {
        status: err.response.status,
        data: err.response.data
      }
      res.status(302).send(obj);
    })

})

router.put('/cloudenterprise/update', function (req, res) {
  var body = "";
  req.on("data", function (chunk) {
    body += chunk;
  })
  req.on("end", function () {
    axios({
        url: "/cloudenterprise/update",
        method: "put",
        data: JSON.parse(body),
        headers: {
          'token': req.headers.token
        }
      })
      .then(data => {

        res.send(data.data)
      })
      .catch(err => {
        console.log(err)
      })
  })
})

router.get('/cloudenterprise/checkAccount', function (req, res) {
  var body = req.query;
  axios({
      url: "/cloudenterprise/checkAccount",
      method: "get",
      params: {
        body
      },
      headers: {
        'token': req.headers.token
      }
    })
    .then(data => {
      res.send(data.data)
    })
    .catch(err => {
      res.status(err.response.status).send(err.response.data);
    })

})

router.delete("/cloudenterprise/delete/:id", function (req, res) {
  console.log(req.headers.token)
  let id = req.params.id
  axios({
    method: "delete",
    url: `/cloudenterprise/delete/${id}`,
      headers: {
        'token': req.headers.token
      }
  }).then(data => {
    res.send(data.data)
  }).catch(err => {
    console.log(err)
    res.status(err.response.status).send(err.response.data);
  })

})
router.post('/cloudenterprise/add', function (req, res) {
  var str = "";
  req.on("data", function (dt) {
    str += dt
  })
  req.on("end", function () {
    axios({
        method: "post",
        url: "/cloudenterprise/add",
        data: JSON.parse(str),
        headers: {
          'token': req.headers.token
        }
      })
      .then(data => {

        res.send(data.data)
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data)
      })
  })
});
module.exports = router;