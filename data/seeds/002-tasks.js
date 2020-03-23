
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Learn SQL', notes: 'How to query a db', completed: false, project_id: 1},
        {id: 2, description: 'Learn Knex', notes: 'How to migrate and seed the db', completed: false, project_id: 1},
        {id: 3, description: 'Find local shelters', notes: 'Research ones in the area', completed: false, project_id: 2},
        {id: 4, description: 'Fill out paperwork', notes: 'Have all necessary information for adoption', completed: false, project_id: 2}
      ]);
    });
};
