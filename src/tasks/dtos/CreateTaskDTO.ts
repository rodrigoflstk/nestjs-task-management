import { IsNotEmpty } from 'class-validator';

class CreateTaskDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}

export { CreateTaskDTO };
