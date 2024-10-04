import { IsEnum, IsOptional, IsString, IsUrl } from "class-validator";
import { SkillProficiencyLevel } from "../entity/skill.entity";

export class UpdateSkillDto {
	@IsString()
	@IsOptional()
	name: string;

	@IsUrl()
	@IsOptional()
	iconUrl: string;

	@IsEnum(SkillProficiencyLevel, { message: 'proficiencyLevel must be one of BEGINNER, INTERMEDIATE, ADVANCED' })
	@IsOptional()
	proficiencyLevel: SkillProficiencyLevel;

	@IsString()
	@IsOptional()
	description: string;	
}