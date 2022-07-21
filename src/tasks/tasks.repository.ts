import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
class TasksRepository extends Repository<Task> {}

export { TasksRepository };
