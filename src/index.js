var express = require('express')
var app = express()
/**
 * for this task, API1 and API2 are provided via helper functions
 * `getUserProfiles` and `getAllPermissions` respectively.
 */
var {
  getUserProfiles,
  getAllPermissions,
} = require('@r-tech-org/merge-apis-meta')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/userProfiles', (req, res) => {
  getUserProfiles((profiles) => {
    res.send(profiles)
  })
})

app.get('/userPermissions/:userId', (req, res) => {
  res.send('TODO')
})

var port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
