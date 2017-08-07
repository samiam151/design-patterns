interface StateLike {
    writeName(context: StateContext, name: string): void;
}

class StateLowerCase implements StateLike {
    public writeName(context: StateContext, name: string) {
        console.log(name.toLowerCase());
        context.setState(new StateMultipleUpperCase());
    }
}

class StateMultipleUpperCase implements StateLike {
    private count: number = 0;
    public writeName(context: StateContext, name: string){
        console.log(name.toUpperCase());
        if (++this.count > 1){
            context.setState(new StateLowerCase());
        }
    }
}

class StateContext {
    private myState: StateLike;
    constructor() {
        this.setState(new StateLowerCase());
    }

    public setState(newState: StateLike): void {
        this.myState = newState;
    }
    
    public writeName(name: string): void {
        this.myState.writeName(this, name);
    }
}

function main() {
    var sc: StateContext = new StateContext();

    sc.writeName("Monday");
    sc.writeName("Tuesday");
    sc.writeName("Wednesday");
    sc.writeName("Thursday");
    sc.writeName("Friday");
    sc.writeName("Saturday");
    sc.writeName("Sunday");
}

main();