import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { isString } from "util";

export class CreateBlogPostDto {
	@IsString()
	@IsNotEmpty()
	title: string;

	@IsString()
	@IsNotEmpty()
	content: string;

	@IsString()
	@IsOptional()
	author?: string;

	@IsArray({ each: true })
	@IsOptional()
	tags?: string[];
}
