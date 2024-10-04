import { Module } from "@nestjs/common";
import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DbModule } from "src/global/db/db.module";
import { Project } from "./entity/project.entity";

@Module({
	imports: [TypeOrmModule.forFeature([Project]), DbModule], // Import DbModule for database access
	controllers: [ProjectController],
	providers: [ProjectService]
})
export class ProjectModule {}
