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
  async createSuperhero(
    @Body() CreateSuperheroDto: CreateSuperheroDto,
  ): Promise<SuperheroEntity> {
    return await this.superheroesService.createSuperhero(CreateSuperheroDto);
  }

  /**
   * @route GET /api/v1/superheroes
   * @description Get all superheroes sorted by humility score
   */
  @Get()
  async findAll(): Promise<SuperheroEntity[]> {
    return await this.superheroesService.findAll();
  }
}
