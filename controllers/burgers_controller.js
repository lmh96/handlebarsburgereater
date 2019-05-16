const express = require("express");
const burger = require("../models/burger.js");

let router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        let obj = {
            burgers: data,
        };
        console.log(obj);
        res.render("index", obj);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body);
    burger.create(req.body.name, function (data) {
        console.log(data);
        res.json(data);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    console.log(req.body);
    burger.update(req.params.id, req.body.devoured, function (data) {
        res.json(data);
    });
});

router.delete("/api/burgers/:id", function (req, res) {
    burger.delete(req.params.id, function (data) {
        res.json(data);
    });
});

module.exports = router;