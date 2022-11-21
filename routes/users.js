var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send({uno: "Uno", dos: "dos"});
    console.log(res);
});
module.exports = router;
