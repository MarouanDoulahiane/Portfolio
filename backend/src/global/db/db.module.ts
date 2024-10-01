import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { join } from "path";

Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
              const isDev = configService.get<string>('NODE_ENV') === 'development';
      
              return {
                type: 'postgres',
                host: configService.get<string>('DB_HOST'),
                port: parseInt(configService.get<string>('DB_PORT'), 10),
                username: configService.get<string>('DB_USER'),
                password: configService.get<string>('DB_PASSWORD'),
                database: configService.get<string>('DB_DATABASE'),
                entities: [join(__dirname, '**', '*.entity{.ts,.js}')], // point to your entities
                synchronize: isDev, // Auto-sync only in development, avoid in production
                logging: isDev ? 'all' : false, // Enable logging in dev
                ssl: !isDev, // Use SSL in production
                migrations: [join(__dirname, 'migrations/*{.ts,.js}')],
                migrationsRun: !isDev, // Run migrations automatically in production
              };
            },
        }),
    ]
})