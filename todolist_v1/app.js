
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


var items= ["Buy Food", "Cook Food" , "Eat Food"];
var work_items =[];


app.get("/",function(req,res){
    
    var today = new Date();
    
    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    var day = today.toLocaleDateString("en-US",options);

    res.render("list" , {listTitle:day , new_items : items});
    
    // res.send(today);


});

app.post("/",function(req,res){
    var item = req.body.newItem;

    if(req.body.list == "work_list"){
        work_items.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work" , function(req,res){
    res.render("list", {listTitle:"work_list", new_items:work_items})
})


app.listen(3000, function(){
    console.log("Server started at port 3000.");
});