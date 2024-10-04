import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { UpdateProjectDto } from "./dto/update-project.dto";
import { CreateProjectDto } from "./dto/create-project.dto";

@Controller('project')
export class ProjectController {
	constructor(private readonly projectService: ProjectService) {}

	@Post()
	create(@Body() createProjectDto: CreateProjectDto) {
		return this.projectService.create(createProjectDto);
	}
	
	@Get(":id")
	findOne(@Param('id') id: string) {
		return this.projectService.findOne(+id);
	}

	@Get()
	findAll() {
		return this.projectService.findAll();
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
		console.debug(updateProjectDto);
		return this.projectService.update(+id, updateProjectDto);
	}

	@Delete(':id')
	delete(@Param('id') id: string) {
		return this.projectService.delete(+id);
	}
}