const db = require("../data/db-config.js");

module.exports = {
  get,
  getById,
  getTaskResource,
  insert
};

function get() {
  return db("projects");
}

function getById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getTaskResource(project_id) {
  return db("project_task as pt")
    .select(
      "projects.projectName",
      "resources.resourcesName",
      "resources.Description",
      "task.taskName",
      "task.Description"
    )
    .join("projects", "projects.id", "pt.project_id")
    .join("resources", "resources.id", "pt.resources_id")
    .join("task", "task.id", "pt.task_id")
    .where({ project_id });
}

// function getTaskResource(project_id) {
//   return db("project_task as pt")
//     .select(
//       "projects.projectName",
//       "resources.resourcesName",
//       "resources.Description",
//       "task.taskName",
//       "task.Description"
//     )
//     .join("projects", "projects.id", "pt.project_id")
//     .join("resources", "resources.id", "pt.resources_id")
//     .join("task", "task.id", "pt.task_id")
//     .where({ project_id })
//     .then(project_task =>
//       project_task.map(project => mappers.actionToBody(project))
//     );
// }

// Post Projects
function insert(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return getById(ids[0]);
    });
}

// Post Resource
