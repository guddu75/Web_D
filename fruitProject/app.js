
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser : true});

const fruitSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true ,
    },
    rating : {
        type : Number,
        min : 1 ,
        max : 10,
    },
    review : String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    name : "Pineapple",
    rating : 7,
    review : "Best fruit !"
});

fruit.save();

const personSchema = new mongoose.Schema({
    name : String,
    age : Number,
    favouriteFruit : fruitSchema
});

const People = mongoose.model("People",personSchema);

const person = new People({
    name : "Debapriya Majumder",
    age : 21 , 
    // favouriteFruit : fruit
});

// person.save();

const mango = new Fruit({
    name : "Mango",
    rating : 10,
    review : "Best fruit !"
});

const banana = new Fruit({
    name: "Banana",
    rating : 9 ,
    review : "healthy af !"
})

const lemon = new Fruit({
    name : "Lemon",
    rating : 6,
    review : "Sour "
});

// Fruit.insertMany([mango, banana , lemon], function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Success");
//     }
// })



People.updateOne({name : "Debapriya Majumder"}, {favouriteFruit : fruit} ,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Updated");
    }
});

// Fruit.deleteOne({name: "Peach"}, function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("deletd!");
//     }
// });

// Fruit.find(function(err,fruits){
//     if(err){
//         console.log(err);
//     }else{
//         // console.log(fruits);
//         mongoose.connection.close();
//         fruits.forEach(function(fruit){
//             console.log(fruit.name);
//         });
//     }
// });














































