import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';

@Controller('auth')
export class AuthController {
  @Inject()
  private readonly authService: AuthService;

  @Post()
  @HttpCode(HttpStatus.OK)
  signin(@Body() Body: Prisma.UserCreateInput) {
    return this.authService.singin(Body);
  }
}
