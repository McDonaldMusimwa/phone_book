const express = require("express");

const router = express.Router();

const getContacts = require("../controller/index");

router.get("/contacts", getContacts.getAllContacts);
router.post("/addcontact", getContacts.addOneContact);
router.put("/modify/:id", getContacts.modifyOneContact);
router.delete("/delete/:id", getContacts.deleteOneContact);
router.get("/:id", getContacts.getOneContact);

module.exports = router;
