import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BlogPost } from "./entity/blogPost.entity";
import { Repository } from "typeorm";
import { CreateBlogPostDto } from "./dto/create-blogPost.dto";
import { UpdateBlogPostDto } from "./dto/update-blogPost.dto";

@Injectable()
export class BlogPostService {
	constructor(
		@InjectRepository(BlogPost)
		private readonly blogPostRepository: Repository<BlogPost>,
	) {}

	async create(createBlogPostDto: CreateBlogPostDto): Promise<BlogPost> {
		const blogPost = this.blogPostRepository.create(createBlogPostDto);
		return this.blogPostRepository.save(blogPost);
	}

	async findOne(id: number): Promise<BlogPost | null> {
		const skill =  await this.blogPostRepository.findOne({ where: { id } });
		return skill ?? null;
	}

	async findAll(): Promise<BlogPost[]> {
		return this.blogPostRepository.find();
	}

	async update(id: number, updateBlogPostDto: UpdateBlogPostDto): Promise<BlogPost> {
		await this.blogPostRepository.update(id, updateBlogPostDto);
		return this.findOne(id);
	}

	async delete(id: number): Promise<void> {
		await this.blogPostRepository.delete(id);
	}
}