const express = require("express");
const path = require("path");

const note = express();

const PORT = process.env.PORT || 8080

note.use(express.urlencoded({extended: true}));
note.use(express.json());
note.use(express.static("public"));



note.listen(PORT, () => {
console.log("note listen on PORT: " + PORT);
});

module.exports = (note) => {

    note.get("/notes", function(req,res){

   res.sendFile(path.join(__dirname, "../public/notes.html"));
   });

    note.get("*", function(req,res){

       res.sendFile(path.join(__dirname, "../public/index.html"));
       });
};

