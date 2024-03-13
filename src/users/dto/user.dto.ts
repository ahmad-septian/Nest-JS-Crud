import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MinLength,
} from 'class-validator';
import { Role } from '../../role/role.entity';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  nama_depan: string;

  @IsString()
  @IsNotEmpty()
  nama_belakang: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  phone_number: string;

  @IsString()
  @IsNotEmpty()
  tanggal_lahir: string;

  @IsString()
  @IsNotEmpty()
  alamat: string;

  @IsBoolean()
  @IsOptional()
  isAktif: boolean;

  @IsString()
  @IsNotEmpty()
  role: Role;
}
