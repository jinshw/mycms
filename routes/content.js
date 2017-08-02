var express = require('express');
var router = express.Router();
var Article = require("../db/ArticleUtils.js")

// 全局变量
var config = require("../config.js")

/* GET users listing. */
router.get('/', function (req, res, next) {
	var data = {
		list: [{
			name: 'zhangsan'
		}, {
			name: 'lisi'
		}, {
			name: 'wangwu'
		},]
	};
	res.render('content', { list: data.list });
	// res.render('main', { data: 'Express' });
});

router.get('/templ', function (req, res, next) {
	console.log("id=====" + req.query.id);

	var articleDao = new Article();

	articleDao.findOne({ id: req.query.id }).then(function (data) {
		var _result = {}
		_result.data = data
		// _result.status = 200
		// _result.msg = "success"

		// res.json({data:data});
		res.render('templ/templ', { data: data, baseurl: config.EJS_BASEURL })
	})


})

module.exports = router;