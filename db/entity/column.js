/**
 * 栏目
 */
var shortid = require("shortid");
var mongoose = require("./db.js"),
  Schema = mongoose.Schema;

var ColumnSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  id: {
    type: String,
    default: shortid.generate
  },
  name: { type: String },
  orders: { type: String },
  pId: { type: String },
  status: { type: String },
  byname: { type: String },
  localdir: { type: String },
  templatedetail: { type: String },
  templatelist: { type: String }
});

module.exports = mongoose.model("column", ColumnSchema);
