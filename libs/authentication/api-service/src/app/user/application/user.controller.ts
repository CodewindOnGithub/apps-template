import { UserDto } from '@authentication/models';
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../domain/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  createUser(@Body() user: UserDto) {
    return this.userService.createUser(user);
  }
}
