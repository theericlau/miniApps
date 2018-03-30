const router = require('express').Router();
const app = require('../controllers/app');
const axios = require('axios');
// const suggestions = require('../../data/data.json');

router.get('/', (req, res) => {
  res.send(200);
});

router.get('/app', (req, res) => {
  // console.log('i get in here', suggestions);
  axios.get('http://localhost:5000/data/data.json')
  .then(response => {
    // console.log('response', response.data);
    res.send(response.data);
  })
});

router.get('/pic/:picId', (req, res)=> {
  // console.log("req", req.params.picId);
  // axios.get(`http://localhost:5000/data/${req.params.picId}`)
  res.send(`http://localhost:5000/data/${req.params.picId}`)
  // console.log('res', res);
})



module.exports = router;
