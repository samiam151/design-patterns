// Setup
function Sale(price){
    this.price = price || 100;
    this.decorators_list = [];
}

Sale.decorators = {};
Sale.decorators.fedtax = {
    getPrice: function(price){
        return price + price * ( 5 / 100);
    }
}
Sale.decorators.money = {
    getPrice: function(price){
        return `$${price.toFixed(2)}`;
    }
}


Sale.prototype.decorate = function(decorator){
    this.decorators_list.push(decorator);
}
Sale.prototype.getPrice = function(){
    var price = this.price;
    this.decorators_list.forEach((decorator, index) => {
        price = Sale.decorators[decorator].getPrice(price);
    });
    return price;
}


// Run
var car = new Sale(500);
car.decorate('fedtax');
car.decorate('money');