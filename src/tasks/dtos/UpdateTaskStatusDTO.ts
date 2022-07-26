import { IsEnum } from 'class-validator';
import { TaskStatus } from '../infra/tasks-status.enum';

class UpdateTaskStatusDTO {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}

export { UpdateTaskStatusDTO };
