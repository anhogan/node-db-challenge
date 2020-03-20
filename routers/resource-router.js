const express = require('express');

const Resources = require('../models/resource-model');

const router = express.Router();

router.get('/', (req, res) => {
  Resources.find()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "The resource information could not be retrieved" });
    });
});

// STRETCH
router.get('/:id', validateId, (req, res) => {
  Resources.findById(req.params.id)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "The resource information could not be retrieved" });
    });
});

// STRETCH
router.get('/:id/projects', validateId, (req, res) => {
  Resources.findResourcesProjects(req.params.id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "The project information could not be retrieved" });
    });
});

router.post('/', (req, res) => {
  Resources.add(req.body)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "The resource could not be created" });
    });
});

// STRETCH
router.put('/:id', validateId, (req, res) => {
  Resources.update(req.body, req.params.id)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "The resource could not be updated" });
    });
});

// STRETCH
router.delete('/:id', validateId, (req, res) => {
  Resources.remove(req.params.id)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: "The resource could not be deleted" });
    });
});

function validateId(req, res, next) {
  Resources.findById(req.params.id)
    .then(resource => {
      if (!resource) {
        res.status(404).json({ message: "Invalid resource id" });
      } else {
        next();
      };
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "The resource information could not be retrieved" });
    });
};

module.exports = router;