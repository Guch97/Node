const express = require('express')
const use_hader = require('../router_header/user')
const router = express.Router()

router.post('/reguser',use_hader.reguser)
router.post('/login',use_hader.login)

module.exports = router