import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDTO } from './dtos/CreateTaskDTO';
import { GetTasksFilterDTO } from './dtos/GetTasksFilterDTO';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilters(tasks: GetTasksFilterDTO): Task[] {
    const { status, search } = tasks;

    let getAllTasks = this.getAllTasks();

    if (status) {
      getAllTasks = getAllTasks.filter((task) => task.status === status);
    }

    if (search) {
      getAllTasks = getAllTasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true;
        }
        return false;
      });
    }

    return getAllTasks;
  }

  getTaskById(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new NotFoundException('This task ID Does not exists');
    }

    return task;
  }

  createNewTask(tasks: CreateTaskDTO): Task {
    const { title, description } = tasks;

    const task: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  deleteTask(id: string): void {
    const found = this.getTaskById(id);
    this.tasks = this.tasks.filter((task) => task.id !== found.id);
  }
}
