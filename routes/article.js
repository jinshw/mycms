var express = require('express');
var router = express.Router();
// var gulp = require('gulp');
// var ejs = require("gulp-ejs")
// var replace = require('gulp-replace');

var ejs = require('ejs-html')
var fs = require('fs')
var moment = require('moment')
var shortid = require('shortid')

var Article = require("../db/ArticleUtils.js")
var articleDao = new Article();

// 全局变量
var config = require("../config.js")


/* GET users listing. */
router.get('/', function (req, res, next) {
    articleDao.findOne({ _id: req.query._id }).then(function (data) {
        res.render('article/articleEdit', { data: data })
    })

    // res.render('article/articleEdit', {  });

});
router.post('/insert', function (req, res, next) {
    req.body.publishtime = moment().format("YYYY-MM-DD HH:mm:ss")
    // req.body._id = shortid.generate()
    articleDao.insert(req.body);
    res.json({ status: 200, msg: 'insert success' });
})
router.post("/getByConditions", function (req, res, next) {
    articleDao.getByConditions(req.body).then(function (data) {
        var _result = {}
        _result.data = data
        res.json({ data: data });
    })
})

router.post("/findOne", function (req, res, next) {
    articleDao.findOne(req.body).then(function (data) {
        var _result = {}
        _result.data = data
        _result.status = 200
        _result.msg = "success"
        res.json(_result);
    })
})


router.post("/findByIdAndUpdate", function (req, res, next) {
    articleDao.findByIdAndUpdate(req.body).then(function (data) {
        var _result = {}
        _result.data = data
        _result.status = 200
        _result.msg = "success"
        res.json(_result);
    })
})

router.post("/del", function (req, res, next) {
    var _result = {}
    _result.status = 200
    _result.msg = "success"
    articleDao.del({ _id: req.body._id })
    res.json(_result);
})

router.post("/publish", function (req, res, next) {
    var _result = {}
    _result.status = 200
    _result.msg = "success"
    
    articleDao.findOne(req.body).then(function (data) {
        var _content = fs.readFileSync(config.TEMPLATE_URL + "templ.ejs", "utf-8")
        let html = ejs.render(_content, { data: data, baseurl: config.HTML_BASEURL })
        fs.writeFileSync(config.EJSTOHTML_URL + data._id + ".html", html)
        // 更新发布时间
        req.body.publishtime = moment().format("YYYY-MM-DD HH:mm:ss")
        req.body.status = "已发布"
        articleDao.findByIdAndUpdate(req.body).then(function (data) {

        })

        res.json(_result)
    })





})

module.exports = router;
