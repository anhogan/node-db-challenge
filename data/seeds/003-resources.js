
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Computer', description: 'MacBook Pro 13”'},
        {id: 2, name: 'Car', description: 'Transportation method'},
        {id: 3, name: 'Internet', description: 'Way to get online'},
        {id: 4, name: 'Leash', description: 'For the dog'}
      ]);
    });
};
