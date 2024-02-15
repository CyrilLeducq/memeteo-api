const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require('cors')
const server = express();
const dotenv = require('dotenv');
const MONGODB_URI = process.env.MONGODB_URI;

server.use(cors());
server.use(express.json());
routes(server);
dotenv.config();

server.listen(7000, () => {
    console.log(`Ecoute sur le port 7000`);

    mongoose.connect(process.env.MONGODB_URI,{

    });

    mongoose.connection
        .once("open", () => console.log("Connexion à MongoDB ok"))
        .on("error", error => console.warn("Problème durant la connexion", error));
});

server.get("/bonjour", (req, res) => {
    // console.log("Hello World !");
    res.send({
        result: "Hello World !"
    })
});
