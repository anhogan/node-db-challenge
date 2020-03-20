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
  return db('');
};

// STRETCH
function findById(id) {
  return db();
};

// STRETCH
function findResourcesProjects(resource_id) {
  return db();
};

function add(data) {
  return db();
};

// STRETCH
function update(id) {
  return db();
};

// STRETCH
function remove(id) {
  return db();
};