const db = require('./dbConfig');

module.exports = {
  find,
  findById,
  update,
  remove
};

function find() {
  return db('tasks');
};

// STRETCH
function findById(id) {
  return db('tasks').where({ id }).first();
};

// STRETCH
function update(changes, id) {
  return db('tasks').where({ id }).update(changes)
    .then(count => {
      console.log(`Updated ${count} records`);
      return findById(id);
    });
};

// STRETCH
function remove(id) {
  return db('tasks').where({ id }).del()
    .then(count => {
      console.log(`Deleted ${count} records`);
      return find();
    });
};