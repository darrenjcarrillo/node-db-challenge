exports.seed = function(knex) {
  return knex("projects").insert([
    { projectName: "Clean Garage", completed: 1 },
    { projectName: "Cut grass", completed: 1 },
    {
      projectName: "Create Redux Project",
      completed: 1
    },
    {
      projectName: "Make Portfolio",
      completed: 1
    },
    { projectName: "Apply for jobs", completed: 1 }
  ]);
};
