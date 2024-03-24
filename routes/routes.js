const express = require("express");
const router = express.Router();

const introducao = require('./introducao')
const lista4 = require('./Lista4')

router.use('/', introducao)
router.use('/lista4', lista4)

module.exports = router
