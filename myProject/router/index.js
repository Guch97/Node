const express = require('express')
const use_hader = require('../router_header/user')
const expressjoi = require('@escook/express-joi')
const {loginSchema} = require('../schema/user')
const router = express.Router()

router.post('/reguser',expressjoi(loginSchema),use_hader.reguser)
router.post('/login',expressjoi(loginSchema),use_hader.login)

module.exports = router