const express = require('express')
const router = express.Router();

router.get('/hi',()=>{
    console.log('HII')
})

module.exports = router