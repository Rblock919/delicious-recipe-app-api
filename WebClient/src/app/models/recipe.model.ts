export interface IRecipe {
  _id: number;
  title: string;
  producer: string;
  ingredients: string[];
  numSteps: number;
  steps: [
    {
    name: string,
    body: string,
    }
  ];
  nutritionValues: {
    calories: number,
    fat: number,
    saturatedFat: number,
    carbohydrate: number,
    sugar: number,
    fiber: number,
    protein: number,
    cholesterol: number,
    sodium: number
  };
  imgDir: string;
}
