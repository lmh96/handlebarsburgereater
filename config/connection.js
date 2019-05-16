const mysql = require("mysql");

const conn = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "burgers_db",
});

conn.connect(function(err) {
    if(err) throw err;
    console.log("connected to sql on " + conn.threadId);
})

module.exports = conn;