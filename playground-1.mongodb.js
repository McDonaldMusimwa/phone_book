// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('phonebook');

// Create a new document in the collection.
db.getCollection('contacts').insertMany(
    [
        {
          "Contact1": {
            "firstName": "Nokubonga",
            "lastName": "Musimwa",
            "email": "nokubongamusimwa@gmail.com",
            "birthDay": "14 June 1993",
            "favorateColor": "Black"
          }
        },
        {
          "Contact2": {
            "firstName": "Issac",
            "lastName": "Babbeyo",
            "email": "isaac@gmail.com",
            "birthDay": "14 May 1990",
            "favorateColor": "Blue"
          }
        },
        {
          "Contact3": {
            "firstName": "Munashe",
            "lastName": "Musimwa",
            "email": "munashemusimwa@gmail.com",
            "birthDay": "6 October 2019",
            "favorateColor": "Red"
          }
        }
      ]
);
