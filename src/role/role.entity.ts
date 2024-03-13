import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  Entity,
} from 'typeorm';

@Entity('tbl_role')
export abstract class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nama_role', length: 100 })
  nama_role: string;

  @Column({ name: 'deskripsi_role', length: 100 })
  deskripsi_role: string;

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
