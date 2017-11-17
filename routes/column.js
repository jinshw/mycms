var express = require('express');
var router = express.Router();
var fs = require('fs')
var ejs = require('ejs-html')
var moment = require('moment')
var shortid = require('shortid')
var Column = require("../db/ColumnUtils.js")
var columnDao = new Column();

var Article = require("../db/ArticleUtils.js")
var articleDao = new Article();
// 全局变量
var config = require("../config.js")

router.get("/", function(req, res, next) {
    res.render('column', {})
})

router.post("/insert", function(req, res, next) {
    req.body.publishtime = moment().format("YYYY-MM-DD HH:mm:ss")
    columnDao.insert(req.body);
    res.json({ status: 200, msg: 'insert success' });
})

router.post("/getByConditions", function(req, res, next) {
    columnDao.getByConditions().then(function(data) {
        var _result = {}
        _result.status = 200
        _result.msg = "success"
        _result.data = data
        res.json(_result);
    })
})

router.post("/del", function(req, res, next) {
    var _result = {}
    _result.status = 200
    _result.msg = "success"
    try {
        columnDao.del({ id: req.body._id })
    } catch (error) {
        console.log(err.name + ":" + error.message)
        console.log(err)
        _result.status = 500
    }
    res.json(_result);
})

router.post("/findByIdAndUpdate", function(req, res, next) {
    columnDao.findByIdAndUpdate(req.body).then(function(data) {
        var _result = {}
        _result.data = data
        _result.status = 200
        _result.msg = "success"
        res.json(_result);
    })
})

/*发布栏目*/
router.post("/publishColumn", function(req, res, next) {

    articleDao.getByConditions(req.body).then(function(data) {
        var _result = {}
        _result.data = data

        // 发布列表
        var _content = fs.readFileSync(config.TEMPLATE_URL + "templ-column.ejs", "utf-8")
        let html = ejs.render(_content, { list:data, baseurl: config.HTML_BASEURL })
        fs.writeFileSync(config.EJSTOHTML_URL + req.body.columnid + ".html", html)

        // 发布文章
        for (var index in data) {
            if(data[index]._doc.link == null){
                var _contentArt = fs.readFileSync(config.TEMPLATE_URL + "templ.ejs", "utf-8")
                let html = ejs.render(_contentArt, { data: data[index], baseurl: config.HTML_BASEURL })
                fs.writeFileSync(config.EJSTOHTML_URL + data[index]._id + ".html", html)
    
                articleDao.findByIdAndUpdate({
                    _id: data[index]._id,
                    publishtime: moment().format("YYYY-MM-DD HH:mm:ss"),
                    status: "已发布"
                }).then(function(data) {
    
                })
            }
        }
        var _result = {}
        _result.data = data
        _result.status = 200
        _result.msg = "success"
        res.json(_result);
    })
})

module.exports = router;