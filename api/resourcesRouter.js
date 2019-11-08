const express = require("express");

const resourcesModel = require("./resourcesModel");

const router = express.Router();

router.get("/", (req, res) => {
  resourcesModel
    .get(req.query)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get cars" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  resourcesModel
    .getById(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get cars" });
    });
});

router.post("/", (req, res) => {
  // const { id } = req.params;
  resourcesModel
    .insert(req.body)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to post Projects" });
    });
});

module.exports = router;
