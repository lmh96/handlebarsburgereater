const mysql = require("mysql");

// const conn = mysql.createConnection({
//     host: "ctgplw90pifdso61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
//     port: 3306,
//     user: "hno4jieu42tos1ml	",
//     password: "qo5mlsfb2mb7jvqa",
//     database: "i3ru4wljmfaw3psd",
// });

const conn = mysql.createConnection(process.env.JAWSDB_URL)

conn.connect(function(err) {
    if(err) throw err;
    console.log("connected to sql on " + conn.threadId);
})

module.exports = conn;