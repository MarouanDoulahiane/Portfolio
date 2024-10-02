import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";
import { Url } from "url";
import { SkillProficiencyLevel } from "../entity/skill.entity";

export class CreateSkillDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsUrl()
	@IsNotEmpty()
	iconUrl: string;

	@IsEnum(SkillProficiencyLevel, { message: 'proficiencyLevel must be one of BEGINNER, INTERMEDIATE, ADVANCED' })
	@IsOptional()
	proficiencyLevel: SkillProficiencyLevel;

	@IsString()
	@IsOptional()
	description: string;	
}