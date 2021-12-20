var express = require('express');
var app = express();
var { api1 } = require('@r-tech-org/merge-apis-meta')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

var port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


api1.getUserProfiles(
  (profiles) => {
    console.log(profiles)
  }
)