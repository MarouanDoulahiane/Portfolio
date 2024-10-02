import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Url } from "url";


export enum SkillProficiencyLevel {
	BEGINNER = "BEGINNER",
	INTERMEDIATE = "INTERMEDIATE",
	ADVANCED = "ADVANCED",
}

@Entity()
export class Skill {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	iconUrl: string;

	@Column({ nullable: true })
	category: string;

	@Column({
		type: 'enum',
		enum: SkillProficiencyLevel,
		nullable: true
	})
	proficiencyLevel: SkillProficiencyLevel;

	@Column({ type: 'text', nullable: true })
	description: string;
}