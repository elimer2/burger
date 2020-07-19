const express = require("express");

//const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.render('index', {
    burgers: [
      {
        name: 'burger1',
        devoured: false,
      },
      {
        name: 'burger2',
        devoured: false,
      },
      {
        name: 'burger3',
        devoured: true,
      },
    ]
  });
});

module.exports = router;
