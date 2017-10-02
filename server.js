var express = require('express'),
    app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/view/index.html')
})

app.get('*', function(req, res){
  res.sendFile(__dirname + '/view/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
