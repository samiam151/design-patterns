var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SimpleCoffee = (function () {
    function SimpleCoffee() {
    }
    SimpleCoffee.prototype.getCost = function () {
        return 1;
    };
    SimpleCoffee.prototype.getIngredients = function () {
        return "Coffee";
    };
    SimpleCoffee.prototype.toString = function () {
        console.log("Cost: " + this.getCost() + "; Ingredients: " + this.getIngredients());
    };
    return SimpleCoffee;
}());
// ==============================
// Decorator Classes
// ==============================
var CoffeeDecorator = (function () {
    function CoffeeDecorator(c) {
        this.coffee = c;
    }
    CoffeeDecorator.prototype.getCost = function () {
        return this.coffee.getCost();
    };
    CoffeeDecorator.prototype.getIngredients = function () {
        return this.coffee.getIngredients();
    };
    CoffeeDecorator.prototype.toString = function () {
        console.log("Cost: " + this.getCost() + "; Ingredients: " + this.getIngredients());
    };
    return CoffeeDecorator;
}());
var WithMilk = (function (_super) {
    __extends(WithMilk, _super);
    function WithMilk(c) {
        return _super.call(this, c) || this;
    }
    WithMilk.prototype.getCost = function () {
        return _super.prototype.getCost.call(this) + 0.5;
    };
    WithMilk.prototype.getIngredients = function () {
        return _super.prototype.getIngredients.call(this) + ", Milk";
    };
    return WithMilk;
}(CoffeeDecorator));
var WithSugar = (function (_super) {
    __extends(WithSugar, _super);
    function WithSugar(c) {
        return _super.call(this, c) || this;
    }
    WithSugar.prototype.getCost = function () {
        return _super.prototype.getCost.call(this) + 0.5;
    };
    WithSugar.prototype.getIngredients = function () {
        return _super.prototype.getIngredients.call(this) + ", Sugar";
    };
    WithSugar.prototype.toString = function () {
        _super.prototype.toString.call(this);
    };
    return WithSugar;
}(CoffeeDecorator));
// ==============================
// Main
// ==============================
function print() {
    console.log("Cost: " + this.getCost() + "; Ingredients: " + this.getIngredients());
}
var pike = new SimpleCoffee();
// print.call(pike);
pike.toString();
console.log(pike.__proto__.hasOwnProperty("toString"));
pike = new WithMilk(pike);
pike.toString();
console.log(pike.__proto__.hasOwnProperty("toString"));
pike = new WithSugar(pike);
pike.toString();
console.log(pike.__proto__.hasOwnProperty("toString"));
