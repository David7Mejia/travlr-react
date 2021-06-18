// backend/routes/index.js
const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);


module.exports = router;

/**
 *
 router.get('/hello/world', function (req, res) {
     res.cookie('XSRF-TOKEN', req.csrfToken());
     res.send('Hello World!');
 });
 */
