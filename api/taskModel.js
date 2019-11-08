const db = require("../data/db-config.js");

module.exports = {
  get,
  getById,
  insert
};

function get() {
  return db("task");
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
