import { Controller, Get, Body, Post } from '@nestjs/common';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get('all')
  async getAll() {
    return this.roleService.all();
  }

  @Post('/create')
  async create(@Body() body) {
    return this.roleService.create(body);
  }
}
