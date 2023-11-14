const express = require('express');
const router = express.Router();

const { getallTasks, getsingleTask, createTask, updateTask, deleteTask } = require('../controllers/tasks');

router.route('/').get(getallTasks).post(createTask);
router.route('/:id').get(getsingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;