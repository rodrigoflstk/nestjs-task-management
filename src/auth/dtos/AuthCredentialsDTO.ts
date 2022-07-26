import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

class AuthCredentialsDTO {
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'password is too weak, try especial characters or uppercase letters',
  })
  password: string;
}

export { AuthCredentialsDTO };
