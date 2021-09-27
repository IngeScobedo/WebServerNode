const express = require("express");
let hbs = require("hbs");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

//HandleBars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
//Servir contenido estatico
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.render("home", {
//     name: "Alan",
//     title: "Learning HBS",
//   });
// });
// app.get("/generic", (req, res) => {
//   res.render("generic", {
//     name: "Alan",
//     title: "Learning HBS",
//   });
// });
// app.get("/elements", (req, res) => {
//   res.render("elements", {
//     name: "Alan",
//     title: "Learning HBS",
//   });
// });
app.get("*", (req, res) => {
  res.sendFile( __dirname + "/public/index.html")
});

app.listen(PORT, ()=>{
  console.log(`Server running on port: ${PORT}`);
} );
