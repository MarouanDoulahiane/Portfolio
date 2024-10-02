import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateSkillDto } from "./dto/skill.dto";
import { SkillService } from "./skill.service";

@Controller('skill')
export class SkillController {
	constructor(private readonly skillService: SkillService) {}

	@Post()
	create(@Body() createSkillDto: CreateSkillDto) {
		return this.skillService.create(createSkillDto);
	}
	
	@Get(":id")
	findOne(@Param('id') id: string) {
		return this.skillService.findOne(+id);
	}

	@Get()
	findAll() {
		return this.skillService.findAll();
	}

	@Put(':id')
	update(@Param('id') id: string, @Body() updateSkillDto: Partial<CreateSkillDto>) {
		console.debug(updateSkillDto);
		return this.skillService.update(+id, updateSkillDto);
	}

	@Delete(':id')
	delete(@Param('id') id: string) {
		return this.skillService.delete(+id);
	}
}