import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogPostModule } from './module/blogPost/blogPost.module';
import { DbModule } from './global/db/db.module';
import { SkillModule } from './module/skill/skill.module';

@Module({
  imports: [BlogPostModule, SkillModule, DbModule], // DbModule must be imported here
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
