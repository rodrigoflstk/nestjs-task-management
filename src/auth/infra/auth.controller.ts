import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDTO } from '../dtos/AuthCredentialsDTO';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
    return this.authService.signUp(authCredentialsDTO);
  }

  @Post('/signin')
  signIn(
    @Body() authCredentialsDTO: AuthCredentialsDTO,
  ): Promise<{ acessToken: string }> {
    return this.authService.signIn(authCredentialsDTO);
  }
}
