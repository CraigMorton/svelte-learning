var express = require('express')
var app = express()
var path = require('path')
var pages = require('./pages.js')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

pages.forEach(function (page) {
  app.get('/' + page, function (req, res) {
    res.sendFile(path.join(__dirname + ('/client/build/' + page + '.html')))
  })
})

app.use(express.static('client/build'))


var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Express server listening at http://' + host + ':' + port)
})
