require('dotenv').config();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
// eslint-disable-next-line no-undef
const url = process.env.URL;

let _db;
const mongoConnect = async (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  await MongoClient.connect(url)
    .then((client) => {
      _db = client;
      console.log('database connected');
      callback(_db);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = { mongoConnect, getDb };
