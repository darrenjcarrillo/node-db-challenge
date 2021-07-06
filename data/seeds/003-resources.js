exports.seed = function(knex) {
  return knex("resources").insert([
    {
      resourcesName: "Vacuum Cleaner",
      Description: "Sample description not required"
    },
    {
      resourcesName: "Lawn Mower",
      Description: "Sample description not required"
    },
    {
      resourcesName: "React, Redux, Sass, CSS",
      Description: "Sample description not required"
    },
    {
      resourcesName: "CSS, HTML, JAVASCRIPT",
      Description: "Sample description not required"
    },
    {
      resourcesName: "Indeed, LinkedIn, Twitter",
      Description: "Sample description not required"
    }
  ]);
};
