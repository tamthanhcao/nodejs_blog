const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/siteController');
// newController.index

router.use('/:slug', siteController.show);
router.use('/', siteController.index);

module.exports = router;
