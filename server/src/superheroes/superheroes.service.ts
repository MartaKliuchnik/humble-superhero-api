import { ConflictException, Injectable } from '@nestjs/common';
import { SuperheroEntity } from './entities/superhero.entity';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SuperheroesService {
  private superheroes: SuperheroEntity[] = [];
  private superheroNames = new Set<string>();

  /**
   * Adds a new superhero to the list if the name is unique.
   * @param {CreateSuperheroDto} createSuperheroDto - The details of the superhero to create.
   * @returns {SuperheroEntity} - The newly created superhero.
   * @throws {ConflictException} - If a superhero with the same name already exists
   */
  async createSuperhero(
    createSuperheroDto: CreateSuperheroDto,
  ): Promise<SuperheroEntity> {
    const nameKey = createSuperheroDto.name.toLowerCase();

    // Check if a superhero with the same name already exists
    if (this.superheroNames.has(nameKey)) {
      throw new ConflictException(`Superhero already exists.`);
    }

    // Create a new superhero with a unique UUID
    const superhero: SuperheroEntity = {
      id: uuidv4(),
      ...createSuperheroDto,
    };

    console.log(superhero);

    const index = this.findInsertionIndex(superhero.humilityScore);
    this.superheroes.splice(index, 0, superhero);
    this.superheroNames.add(nameKey);
    return superhero;
  }

  /**
   * Binary search to find the correct index to insert the new superhero
   * @param {number} humilityScore - Humility score of the new superhero
   * @returns The index where the superhero should be inserted
   */
  findInsertionIndex(humilityScore: number): number {
    let left = 0;
    let rigth = this.superheroes.length;

    while (left < rigth) {
      const mid = Math.floor((left + rigth) / 2);

      if (this.superheroes[mid].humilityScore < humilityScore) {
        rigth = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  /**
   * Retrieves all superheroes, sorted by humility score (highest first).
   * @returns {SuperheroEntity[]} - An array of superheroes sorted by humility score.
   */
  async findAll(): Promise<SuperheroEntity[]> {
    return [...this.superheroes];
  }
}
