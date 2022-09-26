const mongoose = require("mongoose");

// création model de BDD
const PostsModel = mongoose.model(
  // emplacement de la BDD
  "Node-API",
  // structure de la BDD
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  // nom de la table
  "posts"
);

// export du model
module.exports = { PostsModel };
