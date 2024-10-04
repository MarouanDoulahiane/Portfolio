import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Project } from "./entity/project.entity";
import { Repository } from "typeorm";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { CreateProjectDto } from "./dto/create-project.dto";

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,  
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const project = this.projectRepository.create(createProjectDto);  // Changed blogPost to project
    return this.projectRepository.save(project);
  }

  async findOne(id: number): Promise<Project | null> {  // Improved to return null if not found
    const project = await this.projectRepository.findOne({ where: { id } });
    return project ?? null;  // Return null if project is not found
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  async update(id: number, updateProjectDto: UpdateProjectDto): Promise<Project | null> {
    await this.projectRepository.update(id, updateProjectDto);
    return this.findOne(id);  // Will return the updated entity or null if not found
  }

  async delete(id: number): Promise<void> {
    await this.projectRepository.delete(id);
  }
}
