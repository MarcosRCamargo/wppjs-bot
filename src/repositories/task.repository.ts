import { Sequelize } from 'sequelize';
import initTask from '../models/task.model'; // Import the Task model initializer

export class TaskRepository {
  private Task;

  constructor(sequelize: Sequelize) {
    this.Task = initTask(sequelize); // Initialize the Task model with sequelize
  }

  async getAllTasks(): Promise<any[]> { // Adjust return type if you have a Task type
    return await this.Task.findAll(); // Retrieve all tasks from the database
  }

  async getTaskById(id: number): Promise<any | null> { // Adjust return type if you have a Task type
    return await this.Task.findOne({ where: { id } }); // Find a task by its ID
  }

  async createTask(taskData: any): Promise<any> { // Adjust parameter type if you have a Task type
    return await this.Task.create(taskData); // Create a new task and save it to the database
  }

  async updateTask(id: number, taskData: any): Promise<any | null> { // Adjust return type if you have a Task type
    const existingTask = await this.getTaskById(id);
    if (existingTask) {
      await this.Task.update(taskData, { where: { id } }); // Update the existing task
      return await this.getTaskById(id); // Retrieve the updated task
    } else {
      return null; // Task not found
    }
  }

  async deleteTask(id: number): Promise<boolean> {
    const deleted = await this.Task.destroy({ where: { id } }); // Delete the task by ID
    return deleted === 1; // Return true if the task was deleted, false otherwise
  }
}
