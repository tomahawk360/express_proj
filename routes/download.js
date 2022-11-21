var express = require('express');
var conexion = require('./conexion');

var router = express.Router();

router.get("/", (req, res, next) => {
    let forma = req.query.formato;
    console.log(forma);
    res.render('download', {formal: forma});

    conexion.getToken()
        .then((tok) => conexion.getData(tok))
        .then((data) => conexion.filterData(data))
        .then((filt) => console.log(filt));
});

module.exports = router;