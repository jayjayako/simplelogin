var express = require("express");
var router = express.Router();

var dashboard = require("./dashboard");
// var signup = require("./signup");

router.use("/dashboard", dashboard);
// router.use("/signup", signup);

module.exports = router;
