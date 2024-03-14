import {
  Controller,
  Get,
  Body,
  Post,
  Query,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
// import { Roles } from 'nest-keycloak-connect';
import { AgamaService } from './agama.service';

@Controller('agama')
export class AgamaController {
  constructor(private readonly agamaService: AgamaService) {}
  @Get('all')
  async getAll() {
    return this.agamaService.all();
  }

  @Get()
  async getPaginated(@Query('page') page = 1, @Query('take') take = 10) {
    return this.agamaService.paginated(page, take);
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const agamaFindId = await this.agamaService.findOne({
      where: { id: id },
    });
    if (!agamaFindId) throw new NotFoundException('Agama Tidak Ditemukan');
    return agamaFindId;
  }

  @Post('/create')
  async create(@Body() body) {
    return this.agamaService.create(body);
  }

  @Put('edit/:id')
  async update(@Param('id') id: number, @Body() body) {
    return this.agamaService.update(id, body);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: number) {
    return this.agamaService.delete(id);
  }
}
