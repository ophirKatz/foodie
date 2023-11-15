import { Module } from '@nestjs/common';

import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import { Db } from './in-memory-db';

@Module({
  imports: [],
  controllers: [RecipesController],
  providers: [RecipesService, Db],
})
export class AppModule {}
