import { Controller, Get, Body, Post } from '@nestjs/common';
// import { Roles } from 'nest-keycloak-connect';
import { AgamaService } from './agama.service';

@Controller('agama')
export class AgamaController {
  constructor(private readonly agamaService: AgamaService) {}
  @Get('all')
  async getAll() {
    return this.agamaService.all();
  }

  @Post('/create')
  async create(@Body() body) {
    return this.agamaService.create(body);
  }
}
