const express = require("express");

const projectModel = require("./projectModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  projectModel
    .get(req.query)
    .then(allProjects => {
      let changeValue = allProjects.map(project => {
        return {
          ...project,
          completed: project.completed === 0 ? false : true
        };
      });
      res.json(changeValue);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to get cars" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  projectModel
    .getById(id)
    .then(project =>
      res.json({
        ...project,
        completed: project.completed === 0 ? false : true
      })
    )
    .catch(err => {
      res.status(500).json({ error: "Failed to get cars" });
    });
});

router.get("/:id/taskResource", (req, res) => {
  const { id } = req.params;

  projectModel
    .getTaskResource(id)
    .then(result => {
      console.log(`GET BY ID`, result);
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projectList" });
    });
});

// POST Project
router.post("/", (req, res) => {
  // const { id } = req.params;
  projectModel
    .insert(req.body)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to post Projects" });
    });
});

module.exports = router;
