var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let card = [
    {
      name: Ubuntu
    },
    {
      name: Kali
    },
    {
      name: Manjaro
    },
    {
      name: Mint
    }
  ]
  res.render('index', { card });
});

module.exports = router;
