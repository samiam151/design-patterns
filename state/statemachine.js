var StateLowerCase = (function () {
    function StateLowerCase() {
    }
    StateLowerCase.prototype.writeName = function (context, name) {
        console.log(name.toLowerCase());
        context.setState(new StateMultipleUpperCase());
    };
    return StateLowerCase;
}());
var StateMultipleUpperCase = (function () {
    function StateMultipleUpperCase() {
        this.count = 0;
    }
    StateMultipleUpperCase.prototype.writeName = function (context, name) {
        console.log(name.toUpperCase());
        if (++this.count > 1) {
            context.setState(new StateLowerCase());
        }
    };
    return StateMultipleUpperCase;
}());
var StateContext = (function () {
    function StateContext() {
        this.setState(new StateLowerCase());
    }
    StateContext.prototype.setState = function (newState) {
        this.myState = newState;
    };
    StateContext.prototype.writeName = function (name) {
        this.myState.writeName(this, name);
    };
    return StateContext;
}());
function main() {
    var sc = new StateContext();
    sc.writeName("Monday");
    sc.writeName("Tuesday");
    sc.writeName("Wednesday");
    sc.writeName("Thursday");
    sc.writeName("Friday");
    sc.writeName("Saturday");
    sc.writeName("Sunday");
}
main();
