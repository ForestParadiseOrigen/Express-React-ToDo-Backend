// Importacion de las dependencias necesarias para que funcione el proyecto.
var Express = require("express");
const { MongoClient } = require("mongodb");
var Mongclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");
const res = require("express/lib/response");

var app = Express();
app.use(cors());

var CONNECTION_STRING="mongodb://localhost:27017"
var DATABASENAME="ToDo_Paradise";
var DATABASENAME_INN="Innovacion";
var database;

app.listen(
    5038, () =>{
        MongoClient.connect(
            CONNECTION_STRING, (error, client) => {
                database = client.db(DATABASENAME_INN)
                console.log("Mongo DB esta vivo!")
            }
        )
    }
)

app.get(
    '/server/todoparadise/pendientes', (request, response) => {
        database
        .collection("Pendientes")
        .find({})
        .toArray(
            (error, result) => {
                response.send(result);
                console.log(result);
            }
        )
    }
)


// http://localhost:5038/server/todoparadise/pendientes
