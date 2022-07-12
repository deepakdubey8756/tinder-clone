require('dotenv').config()

// importing database to connect to database
const mongoose = require("mongoose");
// my connection string
const connection_url = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASS}@cluster0.6nofo.mongodb.net/tinder-clone?retryWrites=true&w=majority`
const connectToMongoose = ()=>mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },(erro)=>{
    if(erro){
        console.log("there is an error: " + erro)
    }
    console.log("connected to mongodb sucessfuly")
})

module.exports = connectToMongoose;
