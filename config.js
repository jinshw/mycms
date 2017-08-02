
var config = {

    // Mongodb 数据库连接
    DB_URL: "mongodb://localhost:27017/mynode",

    // 模板文件保存的路径
    TEMPLATE_URL: "E:/study/node/mycms/views/templ/",
    // 发布后生成HTML的路径
    EJSTOHTML_URL: "E:/study/node/mycms/dist/pages/",
    // EJS 静态文件访问路径头部
    EJS_BASEURL : "",
    // HTML文件的静态文件访问路径头部
    HTML_BASEURL:"../static"

}


module.exports = config
