const express = require('express');

const Projects = require('../models/project-model');

const router = express.Router();

router.get('/', (req, res) => {

});

// STRETCH
router.get('/:id', validateId, (req, res) => {

});

// STRETCH
router.get('/:id/tasks', validateId, (req, res) => {

});

// STRETCH
router.get('/:id/resources', validateId, (req, res) => {

});

router.post('/', (req, res) => {

});

router.post('/:id/tasks', validateId, (req, res) => {

});

// STRETCH
router.put('/:id', validateId, (req, res) => {

});

// STRETCH
router.delete('/:id', validateId, (req, res) => {

});

function validateId(req, res, next) {
  Projects.findById(req.params.id)
    .then(project => {
      if (!project) {
        res.status(404).json({ message: "Invalid project id" });
      } else {
        next();
      };
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "The project information could not be retrieved" });
    });
};

module.exports = router;