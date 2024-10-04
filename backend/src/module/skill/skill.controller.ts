import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SkillService } from "./skill.service";
import { UpdateSkillDto } from "./dto/update-skill.dto";
import { CreateSkillDto } from "./dto/create-skill.dto";

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
	update(@Param('id') id: string, @Body() updateSkillDto: UpdateSkillDto) {
		console.debug(updateSkillDto);
		return this.skillService.update(+id, updateSkillDto);
	}

	@Delete(':id')
	delete(@Param('id') id: string) {
		return this.skillService.delete(+id);
	}
}