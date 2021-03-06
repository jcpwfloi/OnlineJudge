var express = require('express');
var router = express.Router();

var nav = [
	{ name: '首页', ref: '/', active: true },
	{ name: '问题', ref: '/problem', active: false },
	{ name: '状态', ref: '/status', active: false },
	{ name: '比赛', ref: '/contest', active: false },
	{ name: '排名', ref: '/ranklist', active: false }
            ];

var ranklist = [
        { name: 'JCPWFLOI', rating: 2000, level: 'master' },
        { name: 'LXLWDGY', rating: 1500, level: 'expert' }
            ];

/* GET home page. */
router.get('/', function(req, res) {
    var login = {};
    if (req.session.username) login.username = req.session.username;
  res.render('index', { title: '首页 - CodeBursts!',
      nav: nav,
      ranklist: ranklist,
      login: login});
});

module.exports = router;

