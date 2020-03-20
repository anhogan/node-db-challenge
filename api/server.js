const express = require('express');
const helmet = require('helmet');

const ProjectRouter = require('../routers/project-router');
const TaskRouter = require('../routers/task-router');
const ResourceRouter = require('../routers/resource-router');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/projects', ProjectRouter);
server.use('/api/tasks', TaskRouter);
server.use('/api/resources', ResourceRouter);

module.exports = server;