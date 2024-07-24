import { Router } from 'express';
import { TaskRepository } from '../repositories/task.repository';
import TaskController from '../controllers/taskController';
import { sequelize } from '../database/connection';

const router = Router();
const taskRepository = new TaskRepository(sequelize);
const taskController = new TaskController(taskRepository);

router.get('/tasks', (req, res) => taskController.getTasks(req, res));
router.get('/tasks/:id', (req, res) => taskController.getTask(req, res));
router.post('/tasks', (req, res) => taskController.postTask(req, res));
router.patch('/tasks/:id', (req, res) => taskController.patchTask(req, res));
router.delete('/tasks/:id', (req, res) => taskController.deleteTask(req, res));

export default router;
