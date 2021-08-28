
const express = require("express");

const app = express();

app.get("/",
    function(req, res){
        res.send("Hello");
    }
);

app.get("/contact",
    function(req,res){
        res.send("Contact me");
    }
);

app.get("/about",
    function(req,res){
        res.send("About me");
    }
);


app.listen(3000 , function(){
    console.log("server started at port 3000");
});

