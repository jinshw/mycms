var express = require('express');
var router = express.Router();
var Article = require("../db/ArticleUtils.js")
var articleDao = new Article();

router.post("/getByConditions", function (req, res, next) {
    articleDao.getByConditions().then(function (data) {
        var _result = {}
        _result.data = data
        res.json({ data: data });
    })
})



