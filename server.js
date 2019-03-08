//server.js
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8888;
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json()); // get information from html forms
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname,'build', 'index.html'));
});


// Listen to whatever port above.
app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
  });