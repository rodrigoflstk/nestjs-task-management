import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks.model';

class UpdateTaskStatusDTO {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}

export { UpdateTaskStatusDTO };
