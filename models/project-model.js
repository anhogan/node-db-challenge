const db = require('./dbConfig');

module.exports = {
  find,
  findById,
  findProjectTasks,
  findProjectResources,
  add,
  addTasks,
  update,
  remove
};

function find() {
  return db('projects');
};

// STRETCH
function findById(id) {
  return db('projects').where({ id }).first();
};

// STRETCH
function findProjectTasks(project_id) {
  return db();
};

// STRETCH
function findProjectResources(project_id) {
  return db();
};

function add(data) {
  return db();
};

function addTasks(data, project_id) {
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