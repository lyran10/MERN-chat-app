const express = require("express")
const app = express()
const dotenv = require("dotenv")
const {chats} = require("./data/dummyData.js")

dotenv.config()

app.get("/api/chat",(req,res) => {
  res.send(chats)
})



const PORT = process.env.PORT || 8080
app.listen(PORT,() => {
  console.log(`running on ${PORT}`)
})