import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

/**
 * DTO for creating a new superhero.
 */
export class CreateSuperheroDto {
  @IsString({ message: 'Name must be a valid string.' })
  @IsNotEmpty({ message: 'Name is required and cannot be empty.' })
  readonly name: string;

  @IsString({ message: 'Superpower must be a valid string.' })
  @IsNotEmpty({ message: 'Superpower is required and cannot be empty.' })
  readonly superpower: string;

  @IsNumber({}, { message: 'Humility score must be a number.' })
  @Min(1, { message: 'Humility score must be at least 1.' })
  @Max(10, { message: 'Humility score cannot exceed 10.' })
  readonly humilityScore: number;
}
