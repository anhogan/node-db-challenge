const db = require('../data/dbConfig');

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
  return db('tasks')
    .join('projects', 'projects.id', 'tasks.project_id')
    .select('tasks.description', 'tasks.notes', 'tasks.completed')
    .where({ project_id: project_id });
};

// STRETCH
function findProjectResources(project_id) {
  return db('projects')
    .join('projects_resources as pr', 'pr.project_id', 'projects.id')
    .join('resources', 'resources.id', 'pr.resource_id')
    .select('resources.name', 'resources.description')
    .where({ project_id: project_id });
};

function add(data) {
  return db('projects').insert(data)
    .then(id => {
      return findById(id[0]);
    });
};

function addTasks(data, project_id) {
  const newTask = {
    description: data.description,
    notes: data.notes,
    completed: false,
    project_id: project_id
  };

  return db('tasks').insert(newTask)
    .then(id => {
      return findProjectTasks(project_id);
    });
};

// STRETCH
function update(changes, id) {
  return db('projects').where({ id }).update(changes)
    .then(count => {
      console.log(`Updated ${count} project`);
      return findById(id);
    });
};

// STRETCH
function remove(id) {
  return db('projects').where({ id }).del()
  .then(count => {
    console.log(`Deleted ${count} project`);
    return find();
  });
};