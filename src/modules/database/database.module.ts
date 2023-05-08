import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        synchronize: false,
        ssl: Boolean(configService.get<string>('DB_SSL')),
        autoLoadModels: true,
        define: {
          freezeTableName: true,
        },
        logging: Boolean(configService.get<string>('DB_LOGGING')),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
