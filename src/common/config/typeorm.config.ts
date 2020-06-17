import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TYPEORM_CONFIG_DEFAULT: TypeOrmModuleOptions = {
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  database: process.env.TYPEORM_DATABASE,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  ssl: process.env.SSL == 'true' ? {
    rejectUnauthorized: false
  } : undefined,
  synchronize: true
};

export const SCHEMA_BUSINESS: TypeOrmModuleOptions = {
  ...TYPEORM_CONFIG_DEFAULT,
  schema: 'business',
  type: 'postgres',
  entities: ["dist/db/entities/business/*.js"]
};