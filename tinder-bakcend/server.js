require('dotenv').config()
// importing express
const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
// importing cors
const Cors = require('cors')

// importing our databse connection 
const connectToMongoose = require('./db')
connectToMongoose()


// importing our model
const cardDb = require("./models/cardDb")


// configuring app to use middle ware
app.use(express.json())
// adding cors for cres policy
app.use(Cors())

app.get("/", (req, res)=>{
  res.send("Hey welcome to tinder-clone-backend");
})
// Route 1: to fetch all profiles
app.get('/fetchUser', (req, res) => {
  const userProfile = cardDb.find((err, data)=>{
    if(err){
      res.status(500).send("Internal server Error")
    }
    else{
      res.status(201).send(data);
    }
  })
})


//Route 2: to add new profiles
app.post("/addProfile", (req, res)=>{
  const userData = req.body
  cardDb.create(userData, (err, data)=>{
    if(err){
      res.status(500).send(err);
    }
    else{
      console.log(userData)
      res.status(201).send(data);
    }
  })
})

//Listening application on port 5000;
app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
})
