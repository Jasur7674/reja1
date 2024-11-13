console.log("starting web server");
const express = require("express");
const app = express();
const http = require('http');

// 1 - Entry codes

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// 2 - session codes


// 3 - views codes

app.set("views", "views");
app.set("view engine", "ejs");


// 4 - rooting codes

// app.get("/hello", function (req, res) {
//     res.end(`<h1 style= "background: orange" >"Hello world!"</h1>`);
// });

// app.get("/gift", function (req, res) {
//     res.end(`<h1 style= "background: orange" >"You are at the page of gifts"</h1>`);
// });


app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "succesfully woring..."});
});

app.get('/', function(req, res) {
    res.render('shopping');
});





const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT,  function() {
    console.log(`Server is running succesfully on port: ${PORT}`);
});

// There are 2 ways to make web(frontend): traditional:using ejs-framework(in Backend building frontend) BSSR- backend server side rendering.
// (2 modern : single page aplication (react))




