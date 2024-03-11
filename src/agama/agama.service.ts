import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Agama } from './agama.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { PaginatedResult } from 'src/common/paginated-result.interface';

@Injectable()
export class AgamaService {
  constructor(
    @InjectRepository(Agama)
    private readonly agamaRepository: Repository<Agama>,
  ) {}

  async all(): Promise<Agama[]> {
    return this.agamaRepository.find();
  }

  async paginated(page = 1, take = 10): Promise<PaginatedResult> {
    const where = {};
    const [data, total] = await this.agamaRepository.findAndCount({
      where,
      take,
      skip: (page - 1) * take,
    });

    return {
      data: data,
      meta: {
        total,
        page,
        last_page: Math.ceil(total / take),
      },
    };
  }

  async findOne(condition: FindOneOptions<Agama>): Promise<any> {
    return this.agamaRepository.findOne(condition);
  }

  async create(body) {
    return this.agamaRepository.save(body);
  }

  async update(id: number, data): Promise<any> {
    return this.agamaRepository.update(id, data);
  }

  async delete(id: number): Promise<any> {
    return this.agamaRepository.delete(id);
  }
}
