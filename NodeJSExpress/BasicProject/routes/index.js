const express = require('express')
const router = express.Router()


router.get('/', (req, res, next)=>{
    res.send('Hello from routes folder')
})

router.get('/home',(req, res)=>{
    res.render('home', null)
})


module.exports = router