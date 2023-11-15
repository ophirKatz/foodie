import { Injectable } from '@nestjs/common';
import { Recipe } from '@wndr.foodie/models';
import { Db } from './in-memory-db';

@Injectable()
export class RecipesService {
  constructor(private db: Db) {}

  getRecipesAsync(): Promise<Recipe[]> {
    return this.db.getRecipesAsync();
  }
}
