import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  @Inject()
  private readonly userService: UserService;

  @Post()
  async singupUser(@Body() userData: UserDto): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
