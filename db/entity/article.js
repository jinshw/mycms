/**
 * 文章
 */
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    id: { type: String },
    title: { type: String },
    oldtitle: { type: String },
    author: { type: String },
    content: { type: String },
    publishtime: { type: String },
    status: { type: String }
});

// var MycollectionSchema = new Schema({
//     id: { type: String },
//     name: { type: String }
// })
module.exports = mongoose.model('article', ArticleSchema);
