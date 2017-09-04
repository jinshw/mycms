var express = require('express');
var router = express.Router();
var moment = require('moment')
var shortid = require('shortid')
var Column = require("../db/ColumnUtils.js")
var columnDao = new Column();

router.get("/", function (req, res, next) {
    res.render('column', {})
})

router.post("/insert", function (req, res, next) {
    req.body.publishtime = moment().format("YYYY-MM-DD HH:mm:ss")
    columnDao.insert(req.body);
    res.json({ status: 200, msg: 'insert success' });
})

router.post("/getByConditions", function (req, res, next) {
    columnDao.getByConditions().then(function (data) {
        var _result = {}
        _result.status = 200
        _result.msg = "success"
        _result.data = data
        res.json(_result);
    })
})

router.post("/del", function (req, res, next) {
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

router.post("/findByIdAndUpdate", function (req, res, next) {
     columnDao.findByIdAndUpdate(req.body).then(function (data) {
        var _result = {}
        _result.data = data
        _result.status = 200
        _result.msg = "success"
        res.json(_result);
    })
})


module.exports = router;

