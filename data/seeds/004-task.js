exports.seed = function(knex) {
  return knex("task").insert([
    {
      project_id: 1,
      taskName: "Clean garage by noon",
      Description: "Garage is very dirty and so much stuff to get rid of",
      completed: 1
    },
    {
      project_id: 2,
      taskName: "Cut grass so it will look nice",
      Description: "Grass is very tall and neighbors are complaining",
      completed: 1
    },
    {
      project_id: 3,
      taskName: "Create a project using React/Redux to showcase employers",
      Description:
        "Using React/Redux create CRUD and using the materials learned create backend ",
      completed: 1
    },
    {
      project_id: 4,
      taskName: "Build Portfolio in 2 days",
      Description:
        "Create personal portfolio using Sass/HTML/CSS javascript. List every skill and everything you've learned.",
      completed: 1
    },
    {
      project_id: 5,
      taskName: "Apply for jobs online",
      Description:
        "You need to apply for jobs on indeed, linkIn, and other social media or online platforms",
      completed: 1
    }
  ]);
};
