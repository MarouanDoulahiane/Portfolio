import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BlogPostService } from "./blogPost.service";
import { CreateBlogPostDto } from "./dto/create-blogPost.dto";

@Controller('blogPost')
export class BlogPostController {
	constructor(private readonly blogPostService: BlogPostService) {}

	@Post()
	create(@Body() createBlogPostDto: CreateBlogPostDto) {
		return this.blogPostService.create(createBlogPostDto);
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.blogPostService.findOne(+id);
	}

	@Get()
	findAll() {
		return this.blogPostService.findAll();
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() updateBlogPostDto: CreateBlogPostDto) {
		return this.blogPostService.update(+id, updateBlogPostDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.blogPostService.delete(+id);
	}
}