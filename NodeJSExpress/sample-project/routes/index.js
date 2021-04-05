// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()


const profiles = {
  sjobs: {
    image: '/images/sjobs.jfif',
    name: 'steve jobs',
    company: 'apple',
    languages:['objective-c', 'swift','c++']
  },
  bgates: {
    image: '/images/bgates.jfif',
    name: 'bill gates',
    company: 'microsoft',
    languages:['c', 'c#','java']
  }
}


router.get('/', (req, res) => {
  res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
})

// this gets path variable
router.get('/:path', (req,res) => {
  const path = req.params.path
    res.json({
      data: path
    })
})
//requests parameters
router.get('/:profile/:username', (req,res) =>{
  const profile = req.params.profile
  const username = req.params.username
  const profileFetch = profiles[username]
if(profileFetch == null){
  res.json({
    confirmation: 'fail',
    message: 'Profile ' + username + ' not found'

  }) 
  return
}
res.render('profile', profileFetch)

})

router.post('/addprofile', (req, res) => {
  const body = req.body
 body['languages'] = req.body.languages.split(', ')
 
 profiles[body.username] = body

 res.redirect('/profile/' + body.username )

  // res.json({
  //   confirmation: 'sucess',
  //   data: body
  // })

})


//Queryparams
router.get('/query', (req, res) => {
  const name = req.query.name
  const occupation = req.query.occupation

  const data = {
    name: name,
    occupation: occupation
  }

  res.render('profile', data)

})

module.exports = router