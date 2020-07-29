const express = require('express')
const app = express()
const port = 8000

app.listen(port, function() {
    console.log('alive and well at port: ' + port);
  });

app.get('/', function(req, res) {
    res.send("You're on the homepage");
  });

app.post('/post', function(req, res) {
    res.send("Welcome " + req.query.username)
  });

app.delete('/delete', function(req, res) {
    res.send({tid: req.query.taskID ,delete: true})
});

app.put('/put/:ID', function(req, res) {
    res.send("Task " + req.params.ID + " has been completed")
})

  