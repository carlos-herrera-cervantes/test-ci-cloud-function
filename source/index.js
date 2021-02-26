const functions = require('firebase-functions');

exports.customHandler = functions.https.onRequest((req, res) => {
  res.send(`Hello world`);
});