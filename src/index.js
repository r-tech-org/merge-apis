var express = require('express')
var app = express()
var { getUserProfiles } = require('@r-tech-org/merge-apis-meta')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/userProfiles', (req, res) => {
  getUserProfiles((profiles) => {
    res.send(profiles)
  })
})

var port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
