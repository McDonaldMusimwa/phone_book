const { ObjectId } = require('mongodb');
const mongodb = require('../db/connection');
//const Objectid = require("mongodb").ObjectId;

const getAllContacts = async (req, res, next) => {
  const contacts = await mongodb
    .getDb()
    .db('phonebook')
    .collection('contacts')
    .find();
  contacts.toArray().then((list) => {
    res.setHeader('Content-Type', 'Application/json');
    res.status('200').json(list);
  });
};

const getOneContact = async (req, res, next) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const contact = await mongodb
      .getDb()
      .db('phonebook')
      .collection('contacts')
      .findOne({ _id: contactId });

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json(contact);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllContacts, getOneContact };
