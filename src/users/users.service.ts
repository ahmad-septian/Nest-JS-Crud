import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Users } from './users.entity';
import { PaginatedResult } from 'src/common/paginated-result.interface';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async create(createUserDto: UserDto): Promise<Users> {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    const newUser = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return this.userRepository.save(newUser);
  }

  async updatePassword(id: string, newPassword: string): Promise<any> {
    return this.userRepository.query(
      'update tbl_users set password = $1, updated_by = $2, updated_at = NOW()  where id = $3',
      [newPassword, id, id],
    );
  }

  async findOne(condition: FindOneOptions<Users>): Promise<any> {
    return this.userRepository.findOne(condition);
  }

  async all(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async updateProfile(id, body, password) {
    if (password != '') {
      return this.userRepository
        .createQueryBuilder()
        .update(Users)
        .set({
          nama_depan: body.nama_depan,
          nama_belakang: body.nama_belakang,
          username: body.username,
          phone_number: body.phone_number,
          email: body.email,
          tanggal_lahir: body.tanggal_lahir,
          alamat: body.alamat,
          role: { id: body.role },
          isAktif: body.isAktif,
        })
        .where('id = :id', { id: id })
        .execute();
      // return this.userRepository.update({ id }, {...body, password},);
    } else {
      return this.userRepository
        .createQueryBuilder()
        .update(Users)
        .set({
          nama_depan: body.nama_depan,
          nama_belakang: body.nama_belakang,
          username: body.username,
          phone_number: body.phone_number,
          email: body.email,
          tanggal_lahir: body.tanggal_lahir,
          alamat: body.alamat,
          role: { id: body.role },
          isAktif: body.isAktif,
        })
        .where('id = :id', { id: id })
        .execute();
      // return this.userRepository.update({ id }, {...body, password},);
    }
  }

  async paginated(page = 1, take = 10): Promise<PaginatedResult> {
    const where = {};
    const [data, total] = await this.userRepository.findAndCount({
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
}
