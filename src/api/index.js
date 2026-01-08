const express = require("express");
const router = express.Router();
const user = require("./user/index");

router.post("/user", user);

module.exports = router;
