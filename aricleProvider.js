/**
 * Created by ayoub on 02/04/16.
 */
var articleProvider=function () {};
articleProvider.prototype.data=[]
articleProvider.prototype.getAllArticles=function (callback) {

};
articleProvider.prototype.getArticleById=function (id,callback) {

};
articleProvider.prototype.save=function (article,callback) {

};
new articleProvider().save(
    {title: 'Post one', body: 'Body one', comments:[{author:'Bob', comment:'I love it'}, {author:'Dave', comment:'This is rubbish!'}]}, function(error, article){});


exports.articleProvider=articleProvider();
