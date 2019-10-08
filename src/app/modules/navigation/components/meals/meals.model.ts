export class Ingredient {
  constructor(
    public ingredient_id:number,
    public name: string,
    public weight: number,
    public calories: number
  ) {}
}
export class Meal {
  constructor(
    public name: string,

    public totcals: number,
    public price: number,
    public ingredients: Ingredient[]
  ) {}
}

export class Meals {
  constructor(
    public name: string,

    public calories: number,
    public ingredients: Ingredient[]
  ) {}
}
