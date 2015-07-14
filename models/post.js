//Posts Schema
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PostSchema = new Schema({
	message: String,
	username: String
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;



