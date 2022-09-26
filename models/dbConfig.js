// utiliser mongoose
const mongoose = require("mongoose");

// pour se connecter à la base de données
mongoose.connect(
  "mongodb://localhost:27017/Node-API",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  //   gestion des erreurs
  (err) => {
    if (!err) {
      console.log("MongoDB connection succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);
