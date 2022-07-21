import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks-status.enum';

class UpdateTaskStatusDTO {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}

export { UpdateTaskStatusDTO };
