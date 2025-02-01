import { ConflictException, Injectable } from '@nestjs/common';
import { Superhero } from './entities/superhero.entity';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];

  /**
   * Adds a new superhero to the list if the name is unique.
   * @param {CreateSuperheroDto} createSuperDto - The details of the superhero to create.
   * @returns {Superhero} - The newly created superhero.
   * @throws {ConflictException} - If a superhero with the same name already exists
   */
  createSuperhero(createSuperDto: CreateSuperheroDto): Superhero {
    // Check if a superhero with the same name already exists
    const exists = this.superheroes.some(
      (hero) => hero.name.toLowerCase() === createSuperDto.name.toLowerCase(),
    );

    if (exists) {
      throw new ConflictException(`Superhero already exists.`);
    }

    // Create a new superhero with a unique UUID
    const superhero: Superhero = {
      id: uuidv4(),
      ...createSuperDto,
    };
    this.superheroes.push(superhero);
    return superhero;
  }

  /**
   * Retrieves all superheroes, sorted by humility score (highest first).
   * @returns {Superhero[]} - An array of superheroes sorted by humility score.
   */
  findAll(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
