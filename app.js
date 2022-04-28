/* eslint-disable space-infix-ops */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable node/no-path-concat */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();
const server = require("http").Server(app);
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const url = "mongodb+srv://test:test@cluster0.uwjpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const formSchema = new mongoose.Schema(
  {
    data: Object,
  },
  { collection: "Answers" }
);

const Form = mongoose.model("Form", formSchema);

const formData = (bodyData) => {
  Form({ data: bodyData }).save((err) => {
    if (err) {
      throw err;
    }
  });
};

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (request, response) {
    return response.render("pages/index.ejs");
});

app.get("/guide", function (request, response) {
    return response.render("pages/guide.ejs");
});

/*
app.post("/results", function (request, response) {
    return response.send(request.body);
    /* response.render("pages/results.ejs"); */
//});


 app.post("/results", urlencodedParser, (req, res) => {
  formData(req.body);
  res.render("pages/results.ejs", { name: req.body.name });
});



// Localhost
app.listen(process.env.PORT || 5000, function () {
    console.log("My server is running on port 5000");
});
