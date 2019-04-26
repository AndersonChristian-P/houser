require("dotenv").config()
const express = require("express")
const massive = require("massive")

const app = express()
const port = 4001
const { CONNECTION_STRING } = process.env

const ctrl = require("./controller")

massive(CONNECTION_STRING).then(db => {
  app.set("db", db)
  console.log("db is connected")
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
})

// --Middleware--
app.use(express.json())

// --Endpoints--
app.get("/api/houses", ctrl.retrieve)

app.post("/api/house", ctrl.create)

