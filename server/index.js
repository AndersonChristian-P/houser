const express = require("express")

const app = express()
const port = 4001

const ctrl = require("./controller")

app.use(express.json())

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})