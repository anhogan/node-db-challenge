const express = require('express');

const Projects = require('../models/project-model');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "The project information could not be retrieved" });
    });
});

// STRETCH
router.get('/:id', validateId, (req, res) => {
  Projects.findById(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "The project information could not be retrieved" });
    });
});

// STRETCH
router.get('/:id/tasks', validateId, (req, res) => {
  Projects.findProjectTasks(req.params.id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "The task information could not be retrieved" });
    });
});

// STRETCH
router.get('/:id/resources', validateId, (req, res) => {
  Projects.findProjectResources(req.params.id)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "The resource information could not be retrieved" });
    });
});

router.post('/', validateProject, (req, res) => {
  Projects.add(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "The project could not be created" });
    });
});

router.post('/:id/tasks', validateId, validateTask, (req, res) => {
  Projects.addTasks(req.body, req.params.id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "The task could not be created" });
    });
});

// STRETCH
router.put('/:id', validateId, (req, res) => {
  Projects.update(req.body, req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "The project could not be updated" });
    });
});

// STRETCH
router.delete('/:id', validateId, (req, res) => {
  Projects.remove(req.params.id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "The project could not be deleted" });
    });
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

function validateProject(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ message: "Missing project data" });
  } else if (!req.body.name) {
    res.status(400).json({ message: "Each project must have a name" });
  } else {
    next();
  };
};

function validateTask(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ message: "Missing task data" });
  } else if (!req.body.description) {
    res.status(400).json({ message: "Each task must have a description" });
  } else {
    next();
  };
};

module.exports = router;