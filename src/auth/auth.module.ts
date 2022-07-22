import { Module } from '@nestjs/common';
import { AuthService } from './infra/auth.service';
import { AuthController } from './infra/auth.controller';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
