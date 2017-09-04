var Column = require("./entity/column.js")
var mongoose = require('mongoose')
class ColumnDao {
    insert(obj) {
        var _param = obj || {}
        // var user = new User({
        //     userid: "333",
        //     password: "bbbb"
        // })
        var column = new Column(obj)
        column.save(function (err, res) {
            if (err) {
                console.log("Error:" + err);
            }
            else {
                // console.log("Res:" + res);
            }
        })
    }

    getByConditions(obj) {
        var wherestr = obj || {};
        var promise = new mongoose.Promise();
        Column.find(wherestr, function (err, res) {

            if (err) {
                console.log("Error:" + err);
            }
            else {
                // console.log("Res:", res);
                // console.log(res.userid, res.password)
            }
            promise.resolve(err, res)
        }).sort({ 'orders': 1 })
        return promise;
    }

    del(obj) {
        Column.remove(obj, function (err, res) {
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
        var promise = new mongoose.Promise();
        Column.findByIdAndUpdate(_id, obj, function (err, res) {

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


    // ---------------------------------












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

module.exports = ColumnDao