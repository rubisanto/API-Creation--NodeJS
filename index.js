// framework express pour node
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require("./models/dbConfig");
const postsRoutes = require("./routes/postsController");

// création d'un middleware
// fonction qui écoute les changements sur req et res
app.use(bodyParser.json());
app.use("/posts", postsRoutes);

// connecter au serveur au port 5500
app.listen(5500, () => console.log("Server started : 5500"));
