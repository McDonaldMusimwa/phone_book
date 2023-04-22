
const express = require("express");

const router = express.Router();

const getContacts = require("../controller/index");

router.get("/", getContacts.getAllContacts);

router.get("/:id", getContacts.getOneContact);

module.exports = router;
