import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../database/migrations/*.{js,ts}'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: false,
});

export default AppDataSource;
