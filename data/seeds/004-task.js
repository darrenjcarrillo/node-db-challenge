exports.seed = function(knex) {
  return knex("task").insert([
    {
      taskName: "Clean garage by noon",
      Description: "Garage is very dirty and so much stuff to get rid of",
      completed: 1
    },
    {
      taskName: "Cut grass so it will look nice",
      Description: "Grass is very tall and neighbors are complaining",
      completed: 1
    },
    {
      taskName: "Create a project using React/Redux to showcase employers",
      Description:
        "Using React/Redux create CRUD and using the materials learned create backend ",
      completed: 1
    },
    {
      taskName: "Build Portfolio in 2 days",
      Description:
        "Create personal portfolio using Sass/HTML/CSS javascript. List every skill and everything you've learned.",
      completed: 1
    },
    {
      taskName: "Apply for jobs online",
      Description:
        "You need to apply for jobs on indeed, linkIn, and other social media or online platforms",
      completed: 1
    }
  ]);
};
