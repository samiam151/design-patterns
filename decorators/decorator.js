// Setup
function Sale(price) {
    this.price = price || 100;
}

Sale.prototype.getPrice = function(){
    return this.price;
}

Sale.prototype.decorate = function(decorator){
    var F = function(){},
        overrides = this.constructor.decorators[decorator],
        i, newObj;
    F.prototype = this;
    newObj = new F();
    newObj.uber = F.prototype;

    for (i in overrides){
        if (overrides.hasOwnProperty(i)) {
            newObj[i] = overrides[i];
        }
    }
    return newObj;
}

Sale.decorators = {};

Sale.decorators.fedtax = {
    getPrice: function(){
        var price = this.uber.getPrice();
        price += price * 5 / 100;
        return price;
    }
}

Sale.decorators.quebec = {
    getPrice: function(){
        var price = this.uber.getPrice();
        price += price *  7.5 / 100;
        return price;
    }
}

Sale.decorators.money = {
    getPrice: function(){
        return `${this.uber.getPrice().toFixed(2)}`;
    }
}

// Run
var car = new Sale(5000);
car = car.decorate('fedtax');
car = car.decorate('money');





// let car = {
//     car_price: 5000,
//     get price(){ return this.car_price; },
//     set price(newPrice){ this.car_price = newPrice; }
// }

// let list = ["one", 'two', 'three'];
// list.forEach((item, index) => {
//     // car[`${item}_prop`] = index + 1;
//     Object.defineProperty(car, item, { 
//         set: function(x){
//             this[`${item}_prop`] = x;
//         },
//         get: function(){
//             return this[`${item}_prop`] || 'Does not exist';
//         }
//     })
// })

// function Car(price){
//     this.price = price;

//     Car.test = 'car';
// }