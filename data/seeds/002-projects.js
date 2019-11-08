exports.seed = function(knex) {
  return knex("projects").insert([
    { projectName: "Clean Garage", completed: 0 },
    { projectName: "Cut grass", completed: 0 },
    {
      projectName: "Create Redux Project",
      completed: 0
    },
    {
      projectName: "Make Portfolio",
      completed: 0
    },
    { projectName: "Apply for jobs", completed: 0 }
  ]);
};
