
const MongoClient = require('mongodb').MongoClient;

const assert = require('assert');

const url = "mongodb://localhost:27017";

const dbName = "fruitsDB" ;

const client = new MongoClient(url , {useNewUrlParser : true});

client.connect(function(err){
    assert.equal(null,err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    client.close();

});

const insertDocuments = function(db, callback) {

    const collection = db.collection('fruits');

    collection.insertMany([

    ],function(err,result){
        assert.equal(err, result);
        assert.equal(3, result.result.n);
        assert.equal(3,result.ops.length);
    })

}










































