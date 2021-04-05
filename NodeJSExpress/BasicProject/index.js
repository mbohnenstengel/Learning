
const express = require('express')
//set views directory
const path = require('path')
//instatiated express
const app = express()
//set view directory to view folder
app.set('views', path.join(__dirname, 'views'))
//ser view engine to be mustache
app.set('view engine', 'mustache')
// connect template to engine
app.engine('mustache', require('hogan-middleware').__express)

//setting static directory (images, css, js)
app.use(express.static(path.join(__dirname, 'public')))

// //function argument ()=>
// //req - request, res - response
// app.get('/',(req,res,next)=>{
//     res.send('Hello!')

// })
// //sends back json object
// app.get('/json',(req,res,next)=>{
//     const data = {
//         greeting: 'Hello!'
//     }
//     res.json(data)
// })

// app.get('/home',(req,res,next)=>{
//     //render takes template and data
//     res.render('home', null)
// })

//importing the routes
const indexRouter = require('./routes/index')

app.use('/', indexRouter)

//pass in port number, 5000,8000,8080
app.listen(3000)
console.log('Server running on http://localhost:3000')