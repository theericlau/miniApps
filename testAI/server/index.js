const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'), function (err) {
    if (err) {
      console.log('im the error');
      res.status(500).send(err)
    }
  })
})
