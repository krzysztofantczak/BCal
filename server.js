var express = require('express');
var app = express();

app.use(express.static(__dirname + '/generated'));
app.get('*', function( req, res )
{
  res.sendfile(__dirname + '/generated/index.html');
});
app.listen(process.env.PORT || 8083);
