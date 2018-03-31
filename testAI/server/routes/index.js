const router = require('express').Router();
const axios = require('axios');
const path = require('path');


router.get('/', (req, res) => {
  res.send(200);
});

// router.get('/app/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/dist/index.html')), err => {
//     if (err) {
//       res.status(500).send(err);
//     }
//   }
// })

router.get('/app', (req, res) => {
  axios.get('http://localhost:5000/data/data.json')
  .then(response => {
    res.send(response.data);
  })
});

router.get('/pic/:picId', (req, res)=> {
  res.send(`http://localhost:5000/data/${req.params.picId}`)
})



module.exports = router;
