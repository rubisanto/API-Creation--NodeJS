const express = require("express");
const router = express.Router();

// chercher model
const { PostsModel } = require("../models/postsModel");

//afficher contenu de la BDD
router.get("/", (req, res) => {
  PostsModel.find((err, docs) => {
    // afficher en format json
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  });
});

// ajouter un post
router.post("/", (req, res) => {
  const newRecord = new PostsModel({
    author: req.body.author,
    message: req.body.message,
  });
  newRecord.save((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error creating new data : " + err);
    }
  });
});

// exporter routeur
module.exports = router;
