//const router = require("./admin");
const path = require('path')
const express = require("express");
const rootDir = require('../utils/path')

const router = express.Router();
router.use("/", (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = router;
