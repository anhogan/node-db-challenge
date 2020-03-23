
exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
    table.increments();
    table.string('name').unique().notNullable();
    table.text('description');
    table.boolean('completed').notNullable().defaultTo(false);
  })
  .createTable('tasks', table => {
    table.increments();
    table.text('description').notNullable();
    table.text('notes');
    table.boolean('completed').notNullable().defaultTo(false);
    table.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
  .createTable('resources', table => {
    table.increments();
    table.string('name').unique().notNullable();
    table.text('description');
  })
  .createTable('projects_resources', table => {
    table.primary(['project_id', 'resource_id']);
    table.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
