import { Request, Response } from 'express';
import { TaskRepository } from '../repositories/task.repository';

class TaskController {
  private readonly taskRepository: TaskRepository;

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  async getTask(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const task = await this.taskRepository.getTaskById(id);
      if (task) {
        res.json(task);
      } else {
        res.status(404).send('Task not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async getTasks(req: Request, res: Response) {
    try {
      const tasks = await this.taskRepository.getAllTasks();
      res.json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async postTask(req: Request, res: Response) {
    try {
      const newTask = req.body;
      const createdTask = await this.taskRepository.createTask(newTask);
      res.status(201).json(createdTask);
    } catch (error) {
      console.error(error);
      res.status(400).send('Bad Request');
    }
  }

  async patchTask(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const updatedTask = req.body;
      const updated = await this.taskRepository.updateTask(id, updatedTask);
      if (updated) {
        res.json(updated);
      } else {
        res.status(404).send('Task not found');
      }
    } catch (error) {
      console.error(error);
      res.status(400).send('Bad Request');
    }
  }

  async deleteTask(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const deleted = await this.taskRepository.deleteTask(id);
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).send('Task not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}

export default TaskController;
