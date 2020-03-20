const db = require('./dbConfig');

module.exports = {
  find,
  findById,
  findResourcesProjects,
  add,
  update,
  remove
};

function find() {
  return db('resources');
};

// STRETCH
function findById(id) {
  return db('resources').where({ id }).first();
};

// STRETCH
function findResourcesProjects(resource_id) {
  return db();
};

function add(data) {
  return db();
};

// STRETCH
function update(changes, id) {
  return db();
};

// STRETCH
function remove(id) {
  return db();
};