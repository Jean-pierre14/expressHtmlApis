const exp = require('express')
const router = exp.Router()
const db = require('../models/')
router.get('/', async (req, res)=>{
    let sql = `SEL