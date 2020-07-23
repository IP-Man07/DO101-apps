var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Alô mundo!\n');
});

app.get('/mars', function(req, res) {
  res.send('Alô, alô marciano!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

