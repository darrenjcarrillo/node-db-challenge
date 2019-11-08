exports.seed = function(knex) {
  return knex("project_task").insert([
    {
      project_id: 2,
      resources_id: 2,
      task_id: 2
    },
    {
      project_id: 1,
      resources_id: 1,
      task_id: 1
    },
    {
      project_id: 3,
      resources_id: 3,
      task_id: 3
    }
  ]);
};
