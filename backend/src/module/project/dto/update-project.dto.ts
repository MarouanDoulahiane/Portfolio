import { IsOptional, IsString } from "class-validator";

export class UpdateProjectDto {
	@IsString()
	@IsOptional()
	title: string;

	@IsString()
	@IsOptional()
	description: string;

	@IsString()
	@IsOptional()
	showCaseUrl: string;
}