var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json({extended:true}));


// Declare dist directory of the angular app as the static root

app.use(express.static(path.join(__dirname, 'full-mean-app', 'dist')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
	console.log("listening on 8000");
})