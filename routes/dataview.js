var express = require("express");
var conexion = require("./conexion");

var router = express.Router();

router.get("/", (req, res) => {
        res.render("dataview");
    }
);

module.exports = router;