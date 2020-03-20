const express = require('express');

const Projects = require('../data/data-model');

const router = express.Router();

router.get('/', (req, res) => {

});

// STRETCH
router.get('/:id', (req, res) => {

});

// STRETCH
router.get('/:id/tasks', (req, res) => {

});

// STRETCH
router.get('/:id/resources', (req, res) => {

});

router.post('/', (req, res) => {

});

router.post('/:id/tasks', (req, res) => {

});

// STRETCH
router.put('/:id', (req, res) => {

});

// STRETCH
router.delete('/:id', (req, res) => {

});

module.exports = router;