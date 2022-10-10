const express = require('express')
const { feedBack } = require('../controllers/feedback')

const router = express.Router()

router.post("/feedback",feedBack)

module.exports = router