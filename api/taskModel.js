const db = require("../data/db-config.js");

module.exports = {
  get,
  getById,
  insert
  // getAllTask
};

function get() {
  return db("task ")
    .select("task.*", "projects.projectName")
    .from("task")
    .join("projects", "projects.id", "task.project_id");
}

function getById(id) {
  return db("task")
    .where({ id })
    .first();
}

function insert(task) {
  return db("task")
    .insert(task)
    .then(ids => {
      return getById(ids[0]);
    });
}

// function getAllTask() {
//   return db("task as t")
//     .select("task.taskName", "projects.projectName")
//     .from("task")
//     .join("projects", projects.id, t.project_id);
// }

// function getAllTask(project_id) {
//   return db("task as t")
//     .select("projects.projectName", "task.taskName", "task.Description")
//     .join("projects", "projects.id", "t.project_id")
//     .join("task", "task.id", "t.task_id")
//     .where({ project_id });
// }
