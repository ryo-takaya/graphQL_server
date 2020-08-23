exports.up = function (knex) {
  return knex.schema.createTable("task_items", function (t) {
    t.increments("id").primary();
    t.text("text");
    t.boolean("checked");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("task_items");
};
