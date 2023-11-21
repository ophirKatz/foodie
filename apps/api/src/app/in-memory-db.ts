import { Injectable } from '@nestjs/common';
import { Recipe, Unit } from '@wndr.foodie/models';

@Injectable()
export class Db {
  getRecipesAsync(): Promise<Recipe[]> {
    const recipe: Recipe = {
      id: '12345',
      name: 'Pancakes',
      description: 'Pancakes just like grandpa used to make :)',
      notes: 'Not much to see here',
      coverPhotoUrl: 'https://picsum.photos/701',
      ingredientSections: [
        {
          id: 1,
          order: 1,
          title: 'Drys',
        },
        {
          id: 2,
          order: 2,
          title: 'Wets',
        },
      ],
      ingredients: [
        {
          id: 1,
          title: 'Flour',
          sectionId: 1,
          measurement: {
            amount: 1,
            unit: Unit.Cup,
          },
        },
        {
          id: 2,
          title: 'Milk',
          sectionId: 2,
          measurement: {
            amount: 1.5,
            unit: Unit.Liter,
          },
        },
      ],
      instructions: [
        {
          id: 1,
          title: 'Make Pancakes',
          details: 'Wet the drys then dry the wets!',
        },
      ],
      servings: 6,
      tags: ['Sweet', 'Dairy', 'Appetizer'],
    };

    const recipe2: Recipe = {
      id: '656565',
      name: 'Noodles',
      description: 'Saigon Beef Noodles',
      notes: 'Not much to see here',
      coverPhotoUrl: 'https://picsum.photos/700',
      ingredientSections: [
        {
          id: 1,
          order: 1,
          title: 'Drys',
        },
        {
          id: 2,
          order: 2,
          title: 'Wets',
        },
      ],
      ingredients: [
        {
          id: 1,
          title: 'Flour',
          sectionId: 1,
          measurement: {
            amount: 1,
            unit: Unit.Cup,
          },
        },
        {
          id: 2,
          title: 'Milk',
          sectionId: 2,
          measurement: {
            amount: 1.5,
            unit: Unit.Liter,
          },
        },
      ],
      instructions: [
        {
          id: 1,
          title: 'Make Pancakes',
          details: 'Wet the drys then dry the wets!',
        },
      ],
      servings: 6,
      tags: ['Sweet', 'Dairy', 'Appetizer'],
    };

    return Promise.resolve([recipe, recipe2]);
  }
}
