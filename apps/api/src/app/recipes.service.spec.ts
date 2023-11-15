import { Test } from '@nestjs/testing';

import { RecipesService } from './recipes.service';
import { Recipe } from '@wndr.foodie/models';
import { Db } from './in-memory-db';

describe('RecipesService', () => {
  let service: RecipesService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [RecipesService, Db],
    }).compile();

    service = app.get<RecipesService>(RecipesService);
  });

  describe('getRecipesAsync', () => {
    it('should return some recipes', async () => {
      expect(await service.getRecipesAsync()).toMatchObject<Partial<Recipe>[]>([
        { name: 'Pancakes' },
      ]);
    });
  });
});
