var express = require('express');
var router = express.Router();

//引入数据
const data=require("../mock/data.js")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/list', function(req, res, next) {
      //访问这个接口需要进行跨域处理
      console.log("列表请求")
      res.header("Access-Control-Allow-Origin","http://localhost:3001")
      res.send({
        data
      })
});



module.exports = router;
