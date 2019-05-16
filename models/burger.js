const orm = require("../config/orm.js");

let burger = {
    all: (ret) => {
        orm.selectAll(function(res) {
            ret(res);
        });
    },

    create: (val, ret) => {
        orm.insertOne(val, function(res) {
            ret(res);
        });
    },

    update: (id, val, ret) => {
        orm.updateOne(id, val, function(res) {
            ret(res);
        });
    },

    delete: (id, ret) => {
        orm.delete(id, function (res) {
            ret(res);
        });
    }
}

module.exports = burger;