import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDTO } from './dtos/CreateTaskDTO';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createNewTask(@Body() tasks: CreateTaskDTO): Task {
    return this.tasksService.createNewTask(tasks);
  }
}
