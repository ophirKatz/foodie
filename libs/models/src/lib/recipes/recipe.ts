import { Measurement } from './measurement';

export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredientSections?: RecipeSection[];
  ingredients: RecipeIngredient[];
  instructionSections?: RecipeSection[];
  instructions: RecipeInstruction[];
  notes: string;
  coverPhotoUrl?: string;
  linkToVideo?: string;
  linkToWebsite?: string;
  servings?: number;
  tags: string[];
}

export interface RecipeSection {
  id: number;
  order: number;
  title: string;
}

export interface RecipeIngredient {
  id: number;
  title: string;
  details?: string;
  measurement: Measurement;
  sectionId?: number;
  notes?: string;
}

export interface RecipeInstruction {
  id: number;
  title: string;
  details: string;
  sectionId?: number;
}
