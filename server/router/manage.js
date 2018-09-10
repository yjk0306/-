var express = require("express");
var router = express.Router();
var axios = require("axios");

router.get("/cloudenterpriseversion/listpage",(req,res)=>{
    let query = req.query;
    axios({
      url:"/cloudenterpriseversion/listpage",
      method:"get",
      headers:{
        'token': req.headers.token
      }
    })
    .then(data=>{
      console.log(data)
      res.send(data.data)
    }).catch(err=>{
      console.log(err)
    })
})

router.get("/cloudversion/listall", (req, res) => {
  let query = req.query;
  axios({
      url: "/cloudversion/listall",
      method: "get",
      headers: {
        'token': req.headers.token
      }
    })
    .then(data => {
      console.log(data)
      res.send(data.data)
    }).catch(err => {
      console.log(err)
    })
})
router.get("/cloudenterprise/listall", (req, res) => {
  let query = req.query;
  axios({
      url: "/cloudenterprise/listall",
      method: "get",
      headers: {
        'token': req.headers.token
      }
    })
    .then(data => {
      console.log(data)
      res.send(data.data)
    }).catch(err => {
      console.log(err)
    })
})
















module.exports = router;