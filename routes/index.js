var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let card = [
    {
      name: "Ubuntu",
      image: "https://funnytrivias.com/wp-content/uploads/2021/08/ubuntuFunnyTriviaLinuxDistro-1.png"
    },
    {
      name: "Kali",
      image: "https://images.cults3d.com/iQgdEZYLHqJN_4xOs8-5gsd0ft8=/516x516/https://files.cults3d.com/uploaders/13889723/illustration-file/88f914f9-4ec0-4d0c-8ebb-5edc51f4b3cd/kali_linux.jpg"
    },
    {
      name: "Manjaro",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Manjaro-logo.svg/2048px-Manjaro-logo.svg.png"
    },
    {
      name: "Mint",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Linux_Mint_logo_without_wordmark.svg/1200px-Linux_Mint_logo_without_wordmark.svg.png"
    }
  ]
  res.render('index', { card });
});

module.exports = router;
