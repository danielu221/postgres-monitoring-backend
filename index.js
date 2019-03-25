const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries.js')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/stats', db.getPgStatStatements)

app.get('/activity', db.getPgStatActivity)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))