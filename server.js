const express = require("express");
let app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const handles = require("express-handlebars");

app.engine("handlebars", handles({defaultLayout: "main"}));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("server live on port: " + PORT);
})