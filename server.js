/*********************************************************************************
* WEB322 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part
of this
* assignment has been copied manually or electronically from any other source (including web sites)
or
* distributed to other students.
*
* Name: Rohan Tankala Student ID: 122836166 Date: 2023-06-12
*
* Online (Cyclic) Link: https://lovely-hem-deer.cyclic.app/
*
********************************************************************************/

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var path = require("path");
var app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

var officeData = require("./modules/officeData");


officeData.initialize()
  .then(() => {
    // Routes

    // GET /PartTimer
    app.get("/PartTimer", (req, res) => {
      officeData.getPartTimers()
        .then(employees => {
          res.json(employees);
        })
        .catch(() => {
          res.json({ message: "no results" });
        });
    });

    // GET /
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "views", "home.html"));
    });

    // GET /employee/num
    app.get("/employee/:num", (req, res) => {
      const num = parseInt(req.params.num);
      officeData.getEmployeeByNum(num)
        .then(employee => {
          res.json(employee);
        })
        .catch(() => {
          res.json({ message: "no results" });
        });
    });

    // GET /audio
    app.get("/audio", (req, res) => {
      res.sendFile(path.join(__dirname, "views", "audio.html"));
    });

    // GET /video
    app.get("/video", (req, res) => {
      res.sendFile(path.join(__dirname, "views", "video.html"));
    });

    // GET /table
    app.get("/table", (req, res) => {
      res.sendFile(path.join(__dirname, "views", "table.html"));
    });

    // GET /list
    app.get("/list", (req, res) => {
      res.sendFile(path.join(__dirname, "views", "list.html"));
    });

    // GET /storefront
    app.get("/storefront", (req, res) => {
      res.sendFile(path.join(__dirname, "views", "storefront.html"));
    });

    // [ no matching route ]
    app.get("*", (req, res) => {
      res.status(404).send("Page Not Found");
    });

    // Start the server
    app.listen(HTTP_PORT, () => {
      console.log("Server listening on port: " + HTTP_PORT);
    });
  })
  .catch((err) => {
    console.log("Error initializing office data: " + err);
  });
