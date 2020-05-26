// function type

function add(num1: number, num2: number): number {
    return num1 + num2;
}

let sum: (a: number, b: number) => number;

sum = add;

console.log(sum(1, 2));

// class type

class Test {
    constructor(public num1?: number | undefined, public num2?: number | undefined) {
    }

    show() {
        if (this.num1 && this.num2) {
            console.log(this.num1 + this.num2);
        }
    }
}

let classVariable: new (num1: number, num2: number) => Test = Test

const test = new classVariable(1, 2);

test.show();
