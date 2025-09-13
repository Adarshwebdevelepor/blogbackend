require('dotenv').config()
const mongoose=require('mongoose')

const { config } = require('dotenv')
const express = require('express')
const blogroutes=require('./routes/blogroutes')
const app = express()
const port = 3000

app.use(express.json());
// app.use("/blogs",blogroutes);
console.log("@");
console.log(process.env.MONGO_URI);
const blogRoutes = require('./routes/blogroutes');
app.use('/blogs', blogRoutes);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("connected to the mongodb database");
  app.listen(port,()=>{
     console.log(`🚀 Server running on port ${port}`)
  })
})
.catch((error)=>{
  console.log("error occured whicle connecting with db");
})
