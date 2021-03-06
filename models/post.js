//Posts Schema
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PostSchema = new Schema({
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Author'},
	text: String,
	comment: [CommentSchema]
});

var Post = mongoose.model('Post', PostSchema);

//Create a schema for Comment data
var CommentSchema = new Schema({
	text: String
})

//Create model for comment data
var Comment = mongoose.model('Comment', CommentSchema);

//Create a schema for Author
var AuthorSchema = new Schema({
	author: String
})

//Create model for author data
var Author = mongoose.model('Author', AuthorSchema);

//Export Models
module.exports.Post = Post;
module.exports.Comment = Comment;
module.exports.Author = Author;


