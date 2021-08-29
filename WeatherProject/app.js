
const express = require("express");

const https = require("https");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req,res){

    res.sendFile(__dirname+ "/index.html");

    // const querry = "malda";

    // const unit = "metric";

    // const apiKEY = "e5a2544977673266ed5582db94c199ea";

    // const url= "https://api.openweathermap.org/data/2.5/weather?q="+ querry +"&units="+ unit +"&appid="+ apiKEY ;

    // https.get(url, function(response){
    //     console.log(response.statusCode);


    //     response.on("data", function(data){
    //         const weatherData = JSON.parse(data);

    //         const description = weatherData.weather[0].description;

    //         const  temp = weatherData.main.temp;

    //         const icon = weatherData.weather[0].icon;

    //         const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";

            
    //         console.log(temp);
    //         console.log(description);
    //         console.log(icon);

    //         res.write("<h1>Temperature of Malda is "+ temp + " degree celcius</h1>");
    //         res.write("<p> the weather is "+ description + ".</p>");
    //         res.write("<img src="+imageURL+ " >");
    //         res.send();




    //     })



    // });

    



    
});

app.post("/", function(req,res){

    // const name = req.body.cityName;
    // console.log(name);

    const querry = req.body.cityName;

    const unit = "metric";

    const apiKEY = "e5a2544977673266ed5582db94c199ea";

    const url= "https://api.openweathermap.org/data/2.5/weather?q="+ querry +"&units="+ unit +"&appid="+ apiKEY ;

    https.get(url, function(response){
        console.log(response.statusCode);


        response.on("data", function(data){
            const weatherData = JSON.parse(data);

            const description = weatherData.weather[0].description;

            const  temp = weatherData.main.temp;

            const icon = weatherData.weather[0].icon;

            const imageURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png";

            
            console.log(temp);
            console.log(description);
            console.log(icon);

            res.write("<h1>Temperature of "+ querry +" is "+ temp + " degree celcius</h1>");
            res.write("<p> the weather is "+ description + ".</p>");
            res.write("<img src="+imageURL+ " >");
            res.send();




        })



    });



});





app.listen(3000, function(){
    console.log("Server started at port 3000.");
});