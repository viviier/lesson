var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld', function(req, res) {
  res.render('helloworld', {title: 'hello world'})
})

router.get('/users', function(req, res) {
  var db = req.db
  var user = db.get('nodetest')
  user.find({}, {}, function(e, docs) {
    res.render('users', {
      'users': docs
    })
  })
})

router.get('/adduser', function(req,res) {
  res.render('adduser')
})

router.post('/adduser', function(req, res) {
  var db = req.db;
  var userName = req.body.username;
  var userAge = req.body.userage;
  var userSex = req.body.usersex;
  var user = db.get('nodetest');
  user.insert({
    "name" : userName,
    "age" : userAge,
    "sex" : userSex
  }, function (err, doc) {
      if (err) {
        res.send("Error");
      }
      else {
        res.redirect("users"); // 重定向到 /users
      }
  });
});

module.exports = router;
