import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDTO } from './dtos/CreateTaskDTO';
import { GetTasksFilterDTO } from './dtos/GetTasksFilterDTO';
import { UpdateTaskStatusDTO } from './dtos/UpdateTaskStatusDTO';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() getTasksFilterDTO: GetTasksFilterDTO): Task[] {
    if (Object.keys(getTasksFilterDTO)) {
      return this.tasksService.getTasksWithFilters(getTasksFilterDTO);
    } else {
      return this.tasksService.getAllTasks();
    }
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createNewTask(@Body() createTaskDTO: CreateTaskDTO): Task {
    return this.tasksService.createNewTask(createTaskDTO);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.tasksService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskDTO: UpdateTaskStatusDTO,
  ): Task {
    const { status } = updateTaskDTO;
    return this.tasksService.updateTaskStatus(id, status);
  }
}
