export class Food {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public imageURL: string,
        public recipe: Recipe[], // refer to type Recipe  below
        public step: Step[], // refer to type Recipe  below
    ){}
}

export class Recipe {
    constructor(
        public name: string,
        public amount: string,
        public measure: string,
    ){}
}
export class Step {
    constructor(
        public description: string,
    ){}
}