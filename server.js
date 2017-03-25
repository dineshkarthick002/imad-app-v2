var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleone={
    title:'article one |dinesh kumar',
    heading:'article one',
    date:'sep s,2016',
    content:'
    <p>
                    this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
                </p>
                 <p>
                    this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.
                </p>
                 <p>
                    this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.this is the content for my first article.''
                </p>
};

function createtemplate(data){
    var title =data.title;
    var data =data.date;
    var heading =data.heading;
    var content =data.content;
}
var htmltemplte =
<html>
    <head>
        <title>
        ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
        <a herf="/"home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
          <div>
          ${content}
          </div>
            
    </body>
</html>
';
return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function (req,res) {
 res.send(createTemplate(articleOne));
});

app.get('/article-two',function (req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function (req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
    

   