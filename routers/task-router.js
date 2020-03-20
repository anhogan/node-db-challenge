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
router.get('/:id', (req, res) => {
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
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
  Tasks.remove(req.params.id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: 'The task could not be updated' });
    });
});

module.exports = router;