import { User } from '@authentication/models';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { UserService } from '../../domain/user/user.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { LocalAuthGuard } from '../guards/local-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Request() { user }: { user: User }
  ): Promise<{ access_token: string }> {
    return this.userService.loginUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() { user }: { user: User }) {
    const { email } = user;
    return this.userService.findUserByEmail(email);
  }
}
