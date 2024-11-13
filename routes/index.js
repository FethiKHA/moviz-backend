require('dotenv').config();
var express = require('express');
var router = express.Router();


const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${process.env.API_KEY}`;



router.get('/movies', (req, res) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const movies = data.results
        res.json({movies});
      });
   });

   module.exports = router;