var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var docs=    [
    {title: 'Post one', body: 'Body one'},
    {title: 'Post two', body: 'Body two'},
    {title: 'Post three', body: 'Body three'}
  ];
  res.render('index.jade',{
    title:'blog',
    articles:[
      {title: 'Post one', body: 'Body one'},
      {title: 'Post two', body: 'Body two'},
      {title: 'Post three', body: 'Body three'}
    ]
  });

});

module.exports = router;
