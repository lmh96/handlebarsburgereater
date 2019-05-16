const conn = require("../config/connection.js");

//select all | insert one | update one

let orm = {
    selectAll: (ret) => {
        let quer = "SELECT * FROM burgers";
        conn.query(quer, function (err, res) {
            if (err) throw err;
            ret(res);
        });
    },
    insertOne: (val, ret) => {
        let quer = "INSERT INTO burgers (burger_name) values(\"" + val + "\")";
        conn.query(quer, function (err, res) {
            if (err) throw err;
            ret(res);
        });
    },
    updateOne: (id, val, ret) => {
        let quer = "UPDATE burgers SET devoured=" + val + " WHERE id=" + id;
        conn.query(quer, function (err, res) {
            if (err) throw err;
            ret(res);
        });
    },
    delete: function (id, ret) {
        let quer = "DELETE FROM burgers WHERE id=" + id;
        conn.query(quer, function (err, res) {
            if (err) throw err;
            ret(res);
        });
    }
}

module.exports = orm;