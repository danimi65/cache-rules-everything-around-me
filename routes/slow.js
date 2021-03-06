//jshint esversion: 6
const express = require('express');
// const cache = require('express-redis-cache')();
const sleep = require('../services/sleep');

const router = express.Router();

router.route('/')
  .get( (req, res, next) => {
    return sleep(5000)
      .then(_ => res.render('api/index', (err, html) => {
        res.send(html);
      }));
  });

module.exports = router;
