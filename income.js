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

mongoose.connect("mongodb://localhost/incomeDb");

var IncomeSchema = new mongoose.Schema({
	State: String,
	Income: String
}),

	Incomes = mongoose.model('Incomes', IncomeSchema);
// INDEX	
app.get("/incomes", function (req, res) {
	Incomes.find({}, function (err, docs) {
		res.render('incomes/index', { incomes: docs });
	});
});

// MAP  
app.get('/incomes/income', function (req, res) {
	res.render("incomes/income");
});

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});













