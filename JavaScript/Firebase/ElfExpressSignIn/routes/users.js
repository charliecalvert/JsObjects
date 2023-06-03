import express from 'express';
// eslint-disable-next-line new-cap
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    'use strict';
    res.send('respond with a resource');
});

export default router;
