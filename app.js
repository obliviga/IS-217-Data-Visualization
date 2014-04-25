var express = require('express'),
	mongoose = require('mongoose')
, http = require('http');

var app = express();

app.configure(function() {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + "/public"));
});

mongoose.connect("mongodb://localhost/alcoholDb");

var AlcoholSchema = new mongoose.Schema({
	country: String,
	consumption: Number
}),

	Alcohols = mongoose.model('Alcohols', AlcoholSchema);
// INDEX	
app.get("/alcohols", function (req, res) {
	Alcohols.find({}, function (err, docs) {
		res.render('alcohols/index', { alcohols: docs });
	});
});

// MAP  
app.get('/alcohols/alcohol', function (req, res) {
	res.render("alcohols/alcohol");
});

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});

// app.get('/users/new', function (req, res) {
	// res.render("users/new");
// });













