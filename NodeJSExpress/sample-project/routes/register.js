const express = require('express')
const router = express.Router()


router.post('/user', (req, res) =>{
    const body = req.body

    res.json({
      confirm: 'sucess',
      route: 'register',
      data: body
    })

})



module.exports = router