import { Controller, Get, Body, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('all')
  async getAll() {
    return this.userService.all();
  }

  @Post('/create')
  create(@Body() createUserDto: UserDto): Promise<Users> {
    return this.userService.create(createUserDto);
  }
}
