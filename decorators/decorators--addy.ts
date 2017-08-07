// ==============================
// Base Class
// ==============================
interface Coffee {
    getCost(): number;
    getIngredients(): string;
    toString(): void;
}

class SimpleCoffee implements Coffee {
    public getCost() {
        return 1;
    }
    public getIngredients() {
        return "Coffee";
    }

    public toString() {
        console.log("Cost: " + this.getCost() + "; Ingredients: " + this.getIngredients());
    }
}
// ==============================
// Decorator Classes
// ==============================
abstract class CoffeeDecorator implements Coffee {
    public coffee: Coffee;
    constructor(c: Coffee){
        this.coffee = c;
    }

    public getCost(): number {
        return this.coffee.getCost();
    }

    public getIngredients(): string {
        return this.coffee.getIngredients();
    }
    public toString() {
        console.log("Cost: " + this.getCost() + "; Ingredients: " + this.getIngredients());
    }
}

class WithMilk extends CoffeeDecorator {
    constructor(c: Coffee){
        super(c);
    }

    public getCost(){
        return super.getCost() + 0.5;
    }

    public getIngredients(){
        return super.getIngredients() + ", Milk";
    }

    // public toString() {
    //     super.toString();
    // }
}

class WithSugar extends CoffeeDecorator {
    constructor(c: Coffee){
        super(c);
    }

    public getCost(){
        return super.getCost() + 0.5;
    }

    public getIngredients(){
        return super.getIngredients() + ", Sugar";
    }

    // public toString() {
    //     super.toString();
    // }
}

// ==============================
// Main
// ==============================
function print(){
    console.log("Cost: " + this.getCost() + "; Ingredients: " + this.getIngredients());
}

var pike = new SimpleCoffee();
pike.toString();
console.log(pike.__proto__.hasOwnProperty("toString"));

pike = new WithMilk(pike);
pike.toString();
console.log(pike.__proto__.hasOwnProperty("toString"));

pike = new WithSugar(pike);
pike.toString();
console.log(pike.__proto__.hasOwnProperty("toString"));