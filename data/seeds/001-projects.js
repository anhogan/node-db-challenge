
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Create DB Schema', description: 'Design, migrate, and seed a db', completed: false},
        {id: 2, name: 'Adopt a Dog', description: 'Rescue a pup', completed: false}
      ]);
    });
};
