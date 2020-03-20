const express = require('express');

const Tasks = require('../models/task-model');

const router = express.Router();

router.get('/', (req, res) => {
  Tasks.find()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: 'The task information could not be retrieved' });
    });
});

// STRETCH
router.get('/:id', validateId, (req, res) => {
  Tasks.findById(req.params.id)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: 'The task information could not be retrieved' });
    });
});

// STRETCH
router.put('/:id', validateId, (req, res) => {
  Tasks.update(req.body, req,params.id)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: 'The task could not be updated' });
    });
});

// STRETCH
router.delete('/:id', validateId, (req, res) => {
  Tasks.remove(req.params.id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: 'The task could not be updated' });
    });
});

function validateId(req, res, next) {
  Tasks.findById(req.params.id)
    .then(task => {
      if (!task) {
        res.status(404).json({ message: "Invalid task id" });
      } else {
        next();
      };
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "The task information could not be retrieved" });
    });
};

module.exports = router;