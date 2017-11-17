var Article = require("./entity/article.js")
var mongoose = require('mongoose')
class ArticleDao {
    insert(obj) {
        var _param = obj || {}
        // var user = new User({
        //     userid: "333",
        //     password: "bbbb"
        // })
        var article = new Article(obj)
        article.save(function (err, res) {
            if (err) {
                console.log("Error:" + err);
            }
            else {
                // console.log("Res:" + res);
            }
        })
    }



    findByIdAndUpdate(obj) {
        var _id = obj._id;
        var updatestr = new Object()
        // 主键ID不能修改
        delete obj._id

        var promise = new mongoose.Promise();
        Article.findByIdAndUpdate(_id, obj, function (err, res) {

            if (err) {
                console.log("Error:" + err);
            }
            else {
                // console.log("Res:" + res);
            }
            promise.resolve(err, res)

        })
        return promise;
    }

    findOne(obj) {
        var promise = new mongoose.Promise();

        Article.findOne(obj, function (err, res) {

            if (err) {
                console.log("Error:" + err);
            }
            else {
                // console.log("Res:" + res);
            }
            promise.resolve(err, res)

        })
        return promise;
    }


    del(obj) {
        Article.remove(obj, function (err, res) {
            if (err) {
                console.log("Error:" + err);
            }
            else {
                console.log("Res:" + res);
            }
        })
    }


    getByConditions(obj) {
        var wherestr = obj || {};
        var promise = new mongoose.Promise();
        Article.find(wherestr, function (err, res) {

            if (err) {
                console.log("Error:" + err);
            }
            else {
                // console.log("Res:", res);
                // console.log(res.userid, res.password)
            }
            promise.resolve(err, res)
        })
        // 没有解决的问题：添加按照publishtime字段排序，只返回1000条数据（数据库中实际有2205条），
        // }).sort({ 'publishtime': -1 })
        return promise;
    }

    // 批量更新
    update() {
        var wherestr = { 'userid': '333' };
        var updatestr = { 'password': 'zzzz' };

        User.update(wherestr, updatestr, { multi: true }, function (err, res) {
            if (err) {
                console.log("Error:" + err);
            }
            else {
                // console.log("Res:" + res);
            }
        })
    }

}

module.exports = ArticleDao