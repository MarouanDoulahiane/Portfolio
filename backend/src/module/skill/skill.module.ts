import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DbModule } from "src/global/db/db.module";
import { Skill } from "./entity/skill.entity";
import { SkillService } from "./skill.service";
import { SkillController } from "./skill.controller";

@Module({
	imports: [TypeOrmModule.forFeature([Skill]), DbModule],
	providers: [SkillService],
	controllers: [SkillController],
})
export class SkillModule {}