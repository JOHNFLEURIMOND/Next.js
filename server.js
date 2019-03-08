//server.js
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8888;
const app = express();
const express = require('express');
const bodyParser = require('body-parser');


app.use(bodyParser.json()); // get information from html forms
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'build', 'index.html'));
  });
}

// Listen to whatever port above.
app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
  });