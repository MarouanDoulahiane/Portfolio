import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { BlogPost } from "src/module/blogPost/entity/blogPost.entity";
import { Project } from "src/module/project/entity/project.entity";
import { Skill } from "src/module/skill/entity/skill.entity";

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
      }),
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => {
            const isDev = configService.getOrThrow<string>('NODE_ENV') === 'development';
    
            return {
              type: 'postgres',
              host: configService.getOrThrow<string>('DB_HOST'),
              port: parseInt(configService.getOrThrow<string>('DB_PORT'), 10),
              username: configService.getOrThrow<string>('DB_USERNAME'),
              password: configService.getOrThrow<string>('DB_PASSWORD'),
              database: configService.getOrThrow<string>('DB_DATABASE'),
              entities: [BlogPost, Skill, Project],
              synchronize: isDev, // Auto-sync only in development, avoid in production
              logging: isDev ? 'all' : false, // Enable logging in dev
              ssl: !isDev, // Use SSL in production
              migrations: [join(__dirname, 'migrations/*{.ts,.js}')],
              migrationsRun: !isDev, // Run migrations automatically in production
            };
          },
      }),
  ],
})
export class DbModule {}