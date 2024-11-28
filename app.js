console.log("starting web server");
const express = require("express");
// const res = require("exprress/lib/response");
const app = express();

// MongoDB call

const db = require("./server").db();
const mongodb = require("mongodb");

// 1 - Entry codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 - session codes
// 3 - views codes
app.set("views", "views");
app.set("view engine", "ejs");

// 4 - rooting codes
app.post("/create-item", (req, res) => {
  console.log("User entered /create-item");
  const new_plans = req.body.plans;
  db.collection("plans").insertOne({ plans: new_plans }, (err, data) => {
    res.json(data.ops[0]);
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  console.log(id);
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "Success delete!" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { plans: data.new_input } },
    function (err, data) {
      res.json({ state: "Success edit!" });
    }
  );
  // res.end("well done uh!?");
});

app.post("/erase-all", (req, res) => {
  if (req.body.erase_all) {
    db.collection("plans").deleteMany(function () {
      res.json({state: "All plans deleted."});
    });
  }
});

app.get("/", function (req, res) {
  console.log("User entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something went wrong");
      } else {
        res.render("plans", { items: data });
      }
    });
});

// exporting "app" from appJS to serverJS

module.exports = app;
