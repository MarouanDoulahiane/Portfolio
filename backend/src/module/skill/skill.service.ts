import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Skill } from "./entity/skill.entity";
import { Repository } from "typeorm";
import { UpdateSkillDto } from "./dto/update-skill.dto";
import { CreateSkillDto } from "./dto/create-skill.dto";

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private readonly skillRepository: Repository<Skill>,  // Corrected typo (was skillRespository)
  ) {}

  async create(createSkillDto: CreateSkillDto): Promise<Skill> {
    const skill = this.skillRepository.create(createSkillDto);  // Changed blogPost to skill
    return this.skillRepository.save(skill);
  }

  async findOne(id: number): Promise<Skill | null> {  // Improved to return null if not found
    const skill = await this.skillRepository.findOne({ where: { id } });
    return skill ?? null;  // Return null if skill is not found
  }

  async findAll(): Promise<Skill[]> {
    return this.skillRepository.find();
  }

  async update(id: number, updateSkillDto: UpdateSkillDto): Promise<Skill | null> {
    await this.skillRepository.update(id, updateSkillDto);
    return this.findOne(id);  // Will return the updated entity or null if not found
  }

  async delete(id: number): Promise<void> {
    await this.skillRepository.delete(id);
  }
}
