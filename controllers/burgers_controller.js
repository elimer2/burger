const express = require("express");

const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", (req, res) => {
  burger.all((data) => {
    res.render("index", {
      burgers: data,
    });
  });
});

router.post("/api/burger", (req, res) => {
  burger.create({ name: req.body.name }, (result) => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id/devour", (req, res) => {
  const condition = { id: req.params.id };
  const update = { devoured: true };

  burger.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
