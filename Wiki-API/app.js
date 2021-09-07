const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app  = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = mongoose.Schema({
    title : String,
    content : String
});

const Article = mongoose.model("Article", articleSchema);


//////////////////////////////// Targeting all the articles ///////////////////////////////////////


app.route("/articles")
.get(function(req,res){
    Article.find(function(err,foundArticles){
        if(err){
            res.send(err);
        }else{
            res.send(foundArticles);
        }
    });
})
.post(function(req,res){

    const newArticle = new Article({
        title: req.body.title,
        content : req.body.content
    });

    newArticle.save(function(err){
        if(err){
            res.send(err);
        }else{
            res.send("Successfully added an article");
        }
    });

})
.delete(function(req,res){
    Article.deleteMany(function(err){
        if(err){
            res.send(err);
        }else{
            res.send("Succesfully deleted all items");
        }
    });
});


//////////////////////////////// Targeting a specific article ///////////////////////////////////////

app.route("/articles/:articleTitle")

.get(function(req,res){
    Article.findOne({title : req.params.articleTitle},function(err,foundArticle){
        if(foundArticle){
            res.send(foundArticle);
        }else{
            res.send("No article matching that title found");
        }
    })
})
.put(function(req,res){
    Article.updateOne(
        {title : req.params.articleTitle},
        {title : req.body.title, content : req.body.content},
        {strict : true},
        function(err){
            if(!err){
                res.send("succesfully updated");
            }
        }
    );
})
.patch(function(req,res){
    Article.updateOne(
        {title: req.params.articleTitle},
        {$set : req.body},
        function(err){
            if(!err){
                res.send("Successfully updated");
            }else {
                res.send(err);
            }
        }
    );
})
.delete(function(req,res){
    Article.deleteOne({title: req.params.articleTitle}, function(err){
        if(!err){
            res.send("Succesfully Deleted");
        }
    });
});



app.listen(3000, function(){
    console.log("server started at port 3000.");
});