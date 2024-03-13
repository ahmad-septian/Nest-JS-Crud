import { Role } from '../role/role.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('tbl_users')
export abstract class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nama_depan', length: 100 })
  nama_depan: string;

  @Column({ name: 'nama_belakang', length: 100 })
  nama_belakang: string;

  @Column({ name: 'username', length: 100 })
  username: string;

  @Column({ name: 'phone_number', length: 15 })
  phone_number: string;

  @Column({ name: 'verif_phone_number', default: false })
  verif_phone_number: boolean;

  @Column({ name: 'email', length: 100 })
  email: string;

  @Column({ name: 'verif_email', default: false })
  verif_email: boolean;

  @Column({ name: 'tanggal_lahir', length: 100 })
  tanggal_lahir: string;

  @Column({ name: 'alamat', length: 255 })
  alamat: string;

  @ManyToOne(() => Role, (role) => role.id, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    eager: true,
  })
  @JoinColumn({
    name: 'role',
  })
  role: Role;

  @Column({ name: 'password', length: 100 })
  password: string;

  @Column({ name: 'isAktif', default: true })
  isAktif: boolean;

  @Column({ name: 'created_by', nullable: true })
  createdBy: string;

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    nullable: true,
    default: null,
    onUpdate: 'CURRENT_TIMESTAMP(3)',
  })
  updatedAt: Date;
}
