import { Controller } from '@nestjs/common';
import { UserService } from '../../domain/services/user.service';
import { UserDto } from '../dtos/user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  login(userDto: UserDto) {
    throw new Error('not implemented');
  }
}
