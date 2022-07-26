import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../infra/tasks-status.enum';

class GetTasksFilterDTO {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}

export { GetTasksFilterDTO };
