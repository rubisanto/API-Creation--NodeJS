// framework express pour node
const express = require("express");
const app = express();
require("./models/dbConfig");
const postsRoutes = require("./routes/postsController");

// création d'un middleware
// fonction qui écoute les changements sur req et res
app.use("/", postsRoutes);

// connecter au serveur au port 5500
app.listen(5500, () => console.log("Server started : 5500"));
