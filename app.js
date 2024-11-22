console.log("starting web server");
const express = require ("express");
const app = express();

// const fs = require("fs");
// const { error } = require("console");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if(err) {
//         console.log("ERROR:", err); 
//     } else {
//         user = JSON.parse(data)      
//     }   
// });         

// MongoDB call

const db = require("./server").db();
 
// 1 - Entry codes        
app.use(express.static("public"));    
app.use(express.json());  
app.use(express.urlencoded({extended: true}));    
  
// 2 - session codes       
// 3 - views codes   
app.set("views", "views");                         
app.set("view engine", "ejs");             

// 4 - rooting codes
app.post("/create-item", (req, res) => {   
    // console.log(req.body); 
    // res.json({test:"succesfully woring..."});      
}); 
// app.get("/author", (req, res) => {
//     res.render("author", {user: user });     
// });  
 
app.get("/", function(req, res) {
    res.render("plans"); 
});


// exporting "app" from appJS to serverJS

module.exports = app;




