exports.up = function(knex) {
  return (
    knex.schema

      // Projects Table
      .createTable("projects", tbl => {
        tbl.increments(); // Primary key
        tbl.string("projectName", 255).notNullable();
        tbl
          .boolean("completed")
          .notNullable()
          .defaultTo(0);

        // tbl
        //   .integer("resources_id")
        //   .unsigned()
        //   .references("id")
        //   .inTable("resources")
        //   .onDelete("RESTRICT")
        //   .onUpdate("CASCADE");
      })

      // Resources Table
      .createTable("resources", tbl => {
        tbl.increments(); // Primary key
        tbl.string("resourcesName", 255).notNullable();
        // tbl
        //   .integer("project_id")
        //   .unsigned()
        //   .references("id")
        //   .inTable("projects")projec
        //   .onDelete("RESTRICT")
        //   .onUpdate("CASCADE");
        tbl.string("Description", 255).notNullable();
      })

      .createTable("task", tbl => {
        tbl.increments(); // Primary key
        tbl.string("taskName", 255).notNullable();
        tbl.string("Description", 255).notNullable();
        tbl.boolean("completed").notNullable();
      })

      // Project Task Table
      .createTable("project_task", tbl => {
        tbl.increments(); // Primary key
        tbl
          .integer("project_id")
          .unsigned()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl
          .integer("resources_id")
          .unsigned()
          .references("id")
          .inTable("resources")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
        tbl
          .integer("task_id")
          .unsigned()
          .references("id")
          .inTable("task")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE");
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_task")
    .dropTableIfExists("task")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
