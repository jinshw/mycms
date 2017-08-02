/**
 * 栏目
 */
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var ColumnSchema = new Schema({
    name: { type: String },
    orders: { type: String },
    parentid: { type: String }
});

module.exports = mongoose.model('column', ColumnSchema);
