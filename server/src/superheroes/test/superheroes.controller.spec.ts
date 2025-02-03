import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from '../superheroes.controller';
import { SuperheroesService } from '../superheroes.service';
import { CreateSuperheroDto } from '../dto/create-superhero.dto';
import { SuperheroEntity } from '../entities/superhero.entity';
import { ConflictException } from '@nestjs/common';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  const mockSuperhero: SuperheroEntity = {
    id: 'test-id-1',
    name: 'Spider-Man',
    superpower: 'Wall-crawling, spider-sense, agility',
    humilityScore: 10,
  };

  const mockCreateDto: CreateSuperheroDto = {
    name: 'Spider-Man',
    superpower: 'Wall-crawling, spider-sense, agility',
    humilityScore: 10,
  };

  // Mock the SuperheroesService
  const mockSuperheroesService = {
    createSuperhero: jest.fn(),
    findAll: jest.fn(),
  };

  // Setting up the testing module
  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [
        {
          provide: SuperheroesService,
          useValue: mockSuperheroesService,
        },
      ],
    }).compile();

    controller = moduleRef.get<SuperheroesController>(SuperheroesController);
    service = moduleRef.get<SuperheroesService>(SuperheroesService);
    jest.clearAllMocks();
  });

  describe('createSuperhero', () => {
    it('should create and return a new superhero successfully', async () => {
      mockSuperheroesService.createSuperhero.mockResolvedValueOnce(
        mockSuperhero,
      );

      const result = await controller.createSuperhero(mockCreateDto);

      expect(result).toEqual(mockSuperhero);
      expect(service.createSuperhero).toHaveBeenCalledTimes(1);
      expect(service.createSuperhero).toHaveBeenCalledWith(mockCreateDto);
    });

    it('should throw ConflictException for duplicate superhero name', async () => {
      const errorMessage = 'Superhero already exists';
      mockSuperheroesService.createSuperhero.mockRejectedValueOnce(
        new ConflictException(errorMessage),
      );

      await expect(controller.createSuperhero(mockCreateDto)).rejects.toThrow(
        ConflictException,
      );
      expect(service.createSuperhero).toHaveBeenCalledTimes(1);
      expect(service.createSuperhero).toHaveBeenCalledWith(mockCreateDto);
    });

    it('should throw an error for invalid data', async () => {
      const invalidDto = { ...mockCreateDto, humilityScore: -1 };
      mockSuperheroesService.createSuperhero.mockRejectedValueOnce(
        new Error('Bad Request'),
      );

      await expect(controller.createSuperhero(invalidDto)).rejects.toThrow(
        Error,
      );
      expect(service.createSuperhero).toHaveBeenCalledTimes(1);
      expect(service.createSuperhero).toHaveBeenCalledWith(invalidDto);
    });
  });
});
