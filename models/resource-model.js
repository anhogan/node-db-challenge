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
  return db('resources')
    .join('projects_resources as pr', 'pr.resource_id', 'resources.id')
    .join('projects', 'projects.id', 'pr.project_id')
    .select('projects.name', 'projects.description')
    .where({ resource_id: resource_id});
};

function add(data) {
  return db('resources').insert(data)
    .then(id => {
      return findById(id[0]);
    });
};

// STRETCH
function update(changes, id) {
  return db('resources').where({ id }).update(changes)
    .then(count => {
      console.log(`Updated ${count} resource`);
      return findById(id);
    });
};

// STRETCH
function remove(id) {
  return db('resources').where({ id }).del()
    .then(count => {
      console.log(`Deleted ${count} resource`);
      return find();
    });
};