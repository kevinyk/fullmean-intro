var mongoose = require('mongoose');
var QuoteSchema = mongoose.Schema({
	name: {type: String, required:true},
	quote: {type:String, required:true}
}, {timestamps:true})
mongoose.model('Quote', QuoteSchema);