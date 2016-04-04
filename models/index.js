var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
	console.log('succesfully connected!!');
});
var commentSchema = mongoose.Schema({
     author:String,
    text: String
});
var articleSchema=mongoose.Schema(
    {
        title:String,
        body: String,
        comments: [{
            person:String,
            comment:String,
            created_at: Date
        }],
        created_at:Date
    }

);

var Article = mongoose.model('article', articleSchema);

exports.save=function(articleObj,cb) {
var article = new Article(articleObj);
article.save(function (err, article) {
  if (err) return cb(err);
   cb(null,article);
});
};
//test if save works
/*save({title: 'Post one', body: 'Body one'},function (err,res){
    if(err)console.log('failed');
    console.log(res.toString())
});*/
exports.getAll=function(cb){
Article.find(function (err, articles) {
  if (err) return cb(err);
  cb(null,articles);
})
};
//test if getAll works
/*getAll(function(err,res){
    if(err){
        console.log('something is wronng');
    }
    console.log(res.toString());
});*/
exports.saveComment=function(articleId,commentObj,cb){
    Article.findByIdAndUpdate(
        articleId,
        {$push:{"comments":commentObj}},
        {safe: true, upsert: true, new : true},
        cb
    )
};
//test saveComment
/*saveComment('570244731ae9c69c3a62b84b',{person:'ayoub',comment:'this is my first comment ever'},function(err,res){
    if(err)console.log('smth is wrong!!!');
    console.log(res.toString())
})*/
exports.getArticleById=function(articleId,cb){
    Article.findById(articleId,cb);
};
//test getArticleByID
/*getArticleById('570244731ae9c69c3a62b84b',function(err,res){
    if(err) console.log('wrong')
    console.log(res.toString())
})*/