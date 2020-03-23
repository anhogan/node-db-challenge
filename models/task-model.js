const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  update,
  remove
};

function find() {
  return db('tasks')
    .then(tasks => {
      return tasks.map(task => {
        return {...task, completed: task.completed ? true : false}
      });
    });
};

// STRETCH
function findById(id) {
  return db('tasks').where({ id }).first()
    .then(task => {
      return {...task, completed: task.completed ? true : false}
    });
};

// STRETCH
function update(changes, id) {
  return db('tasks').where({ id }).update(changes)
    .then(count => {
      console.log(`Updated ${count} task`);
      return findById(id);
    });
};

// STRETCH
function remove(id) {
  return db('tasks').where({ id }).del()
    .then(count => {
      console.log(`Deleted ${count} task`);
      return find();
    });
};