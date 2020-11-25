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

