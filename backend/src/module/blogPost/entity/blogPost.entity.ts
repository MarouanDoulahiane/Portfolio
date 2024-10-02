import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class BlogPost {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column('text') // For large content like blog posts, text is ideal
	content: string;

	@Column({ nullable: true })
	author: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@Column('simple-array', { nullable: true })
	tags: string[]; // Tags for better search and categorization
}