var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').pool;

 var config = {
     user: 'abhinavkondapalli77',
     database: 'abhinavkondapalli77',
     host: 'db.imad.hasura-app.io',
     post: '5432',
     password: process.env.DB.PASSWORD
 
 
 }
 
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function (req,res) {
     res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two',function (req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
})

app.get('/article-three',function (req,res) {
    res.send('article three is requested and will not be served');    
});    
    var pool = new pool(config);
    app.get('/test-db', function(req , res) {
      //make a select request
      //return a response with the results
      pool.query('SELECT * FROM test',function (err, result) {
      if (err) {
          res.status(500).send(err.teststring());
      }else{
          res.send(JSON.stringify(result));
      }
      })
      });
    
    
    
    
    
    
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '.main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
