const express = require("express")
const cors = require('cors')
const Item = require('./database/index')

//Create an Express App and define the port to listen on
const app = express()
const PORT = 3000

//Middleware for CORS (Cross Origin Resource Sharing)
app.use(cors())

//Middleware to parse incoming requests with JSON and urlencoded payloads
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!!!!!!!!')
  })

  //Request Handler for the Read Operation on the endpoint /api/items
app.get('/api/items', (req, res) => {
  //Fetch all data stored inside the items collection
  Item.find().then((items) => {
    res.json(items)
  }).catch(err => {
    res.status(500).send(err)
  })
  
})


app.post('/api/items', (req, res) => {
  Item.create(req.body).then((item) => {
    res.status(201).json(item)
  }).catch(err => {
    res.status(500).send(err)
  })
  
})


app.put('/api/items/:id', (req, res) => {
console.log(req.params)
  Item.findOneAndUpdate({_id:req.params.id},req.body, {new: true}).then((item) => {
    res.status(200).json(item)
  }).catch(err => {
    res.status(500).send(err)
  })
  
})


app.delete('/api/items/:id', (req, res) => {
console.log(req.params)
  Item.findOneAndDelete({_id:req.params.id}).then((item) => {
    res.status(202).json(item)
  }).catch(err => {
    res.status(500).send(err)
  })
  
})

  //listening for connections to http://localhost:3000
app.listen(PORT, function () {
    console.log("listening on port 3000!");
  });