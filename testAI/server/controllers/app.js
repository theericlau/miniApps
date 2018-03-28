const axios = require('axios');

module.exports = {
  get: (req, res) => {
    axios.get('https://api.coinmarketcap.com/v1/ticker/')
    .then((response) => {
      res.send(response.data);
    })
    .catch(err => console.log(err));
  }
}