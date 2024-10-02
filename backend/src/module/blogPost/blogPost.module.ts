import { Module } from "@nestjs/common";
import { BlogPostController } from "./blogPost.controller";
import { BlogPostService } from "./blogPost.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogPost } from "./entity/blogPost.entity";
import { DbModule } from "src/global/db/db.module";

@Module({
	imports: [TypeOrmModule.forFeature([BlogPost]), DbModule], // Import DbModule for database access
	controllers: [BlogPostController],
	providers: [BlogPostService]
})
export class BlogPostModule {}
