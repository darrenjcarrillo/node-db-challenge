const express = require("express");

const taskModel = require("./taskModel");

const router = express.Router();

router.get("/", (req, res) => {
  taskModel
    .get(req.query)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get cars" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  taskModel
    .getById(id)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get cars" });
    });
});

router.post("/", (req, res) => {
  // const { id } = req.params;
  taskModel
    .insert(req.body)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to post tasks" });
    });
});

module.exports = router;
