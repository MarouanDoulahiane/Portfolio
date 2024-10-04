import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateBlogPostDto {
	@IsString()
	@IsOptional()
	title: string;

	@IsString()
	@IsOptional()
	content: string;

	@IsString()
	@IsOptional()
	author?: string;

	@IsArray({ each: true })
	@IsOptional()
	tags?: string[];
}
