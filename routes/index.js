
/*
 * GET home page.
 */
//Mongoose 

var mongoose = require('../node_modules/mongoose');
mongoose.connect('mongodb://localhost/incomeDb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
console.log("Connected!");

//income Schema
var Schema = mongoose.Schema;
var incomeSchema = new Schema({
	State:{
		Income: Number
	}
});

//Our Model
var DataModel = mongoose.model('DataModel',incomeSchema,'incomes');


//Exports!
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

//This will be called by Ajax
exports.mongo = function(req, res){


		//Using lean
		DataModel.find().lean().exec(function (err, results) {
			res.send(results);
		});

	//});

};