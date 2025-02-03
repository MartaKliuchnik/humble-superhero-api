import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { SuperheroEntity } from './entities/superhero.entity';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  /**
   * @route POST /api/v1/superheroes
   * @description Create a new superhero
   */
  @Post()
  createSuperhero(@Body() createSuperDto: CreateSuperheroDto): SuperheroEntity {
    return this.superheroesService.createSuperhero(createSuperDto);
  }

  /**
   * @route GET /api/v1/superheroes
   * @description Get all superheroes sorted by humility score
   */
  @Get()
  findAll(): SuperheroEntity[] {
    return this.superheroesService.findAll();
  }
}
