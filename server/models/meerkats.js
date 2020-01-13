var mongoose = require('mongoose');
var MeerkatSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2 },
    favorite_color: {type: String, required: true, minlength: 2}
    }, {timestamps: true})
mongoose.model('Meerkat', MeerkatSchema); 
var Meerkat = mongoose.model('Meerkat');   