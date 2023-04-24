const { ObjectId } = require("mongodb");
const mongodb = require("../db/connection");
//const postSchema = require('../models/model')

//Read all contacts
const getAllContacts = async (req, res) => {
  const contacts = await mongodb
    .getDb()
    .db("phonebook")
    .collection("contacts")
    .find();
  contacts.toArray().then((list) => {
    res.setHeader("Content-Type", "Application/json");
    res.status("200").json(list);
  });
};

//get one contact
const getOneContact = async (req, res, next) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const contact = await mongodb
      .getDb()
      .db("phonebook")
      .collection("contacts")
      .findOne({ _id: contactId });

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

//Add one contact
const addOneContact = async (req, res) => {
  console.log(req.body);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    birthDay: req.body.birthday,
    favorateColor: req.body.favorateColor,
  };

  const response = await mongodb
    .getDb()
    .db("phonebook")
    .collection("contacts")
    .insertOne(contact);
  if (response.acknowledged) {
    res.status(200).json(response);
  } else {
    res.status(400).send(`${contact.firstName} failed to add to the phonebook`);
  }
};

//Update One contact
const modifyOneContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);

  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    birthDay: req.body.birthDay,
    favorateColor: req.body.favorateColor,
  };

  const response = await mongodb
    .getDb()
    .db("phonebook")
    .collection("contacts")
    .updateOne({ _id: contactId }, { $set: contact });
  if (response.acknowledged) {
    res.status(200).json(response);
  } else {
    res.status(400).send(`${contact.firstName} failed to add to the phonebook`);
  }
};

//Delete One contact
const deleteOneContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const contact = await mongodb
    .getDb()
    .db("phonebook")
    .collection("contacts")
    .findOne({ _id: contactId });
  contact.toArray().json();
  const response = await mongodb
    .getDb()
    .db("phonebook")
    .collection("contacts")

    .deleteOne({ _id: contactId });
  if (response.acknowledged) {
    res.status(200).json(response);
  } else {
    res.status(400).send(`${contact.firstName} failed to add to the phonebook`);
  }
};

module.exports = {
  getAllContacts,
  getOneContact,
  addOneContact,
  deleteOneContact,
  modifyOneContact,
};
