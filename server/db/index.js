let mysql = require('mysql')
//配置链接数据库的参数
let db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
	port:'3306',
    password: '1481946141anml',
    database: 'vue_test'
})

module.exports = db