const express = require("express");
const router = express.Router();
//récupérer l'id de l'objet
const ObjectID = require("mongoose").Types.ObjectId;

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

// modifier un post
router.put("/:id", (req, res) => {
  // interroger si l'id est valide
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }

  const updateRecord = {
    author: req.body.author,
    message: req.body.message,
  };

  // mettre à jour le model
  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updateRecord },
    { new: true },
    (err, docs) => {
      // si pas d'erreur envoyer le résultat
      if (!err) res.send(docs);
      else console.log("Update error : " + err);
    }
  );
});

// supprimer un post
router.delete("/:id", (req, res) => {
  // interroger si l'id est valide
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }

  //supprimer dans le model
  PostsModel.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("Delete error : " + err);
  });
});

// exporter routeur
module.exports = router;
