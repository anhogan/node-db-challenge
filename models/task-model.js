const db = require('./dbConfig');

module.exports = {
  find,
  findById
};

function find() {
  return db('');
};

// STRETCH
function findById(id) {
  return db();
};