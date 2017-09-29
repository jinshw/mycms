/**
 * 文章
 */
var shortid = require('shortid')
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    _id: {
        type: String,
        'default': shortid.generate
    },
    id: { type: String },
    title: { type: String },
    oldtitle: { type: String },
    author: { type: String },
    content: { type: String },
    publishtime: { type: String },
    status: { type: String },
    columnid: { type: String },
    classid: { type: String },
    brief: { type: String }
});

// var MycollectionSchema = new Schema({
//     id: { type: String },
//     name: { type: String }
// })
module.exports = mongoose.model('article', ArticleSchema);
