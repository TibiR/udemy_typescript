function Logger(construtor: Function) {
    console.log('Logging...');
    console.log(construtor);
}

// factory

// function Logger(logString: string) {
//     return function(construtor: Function) {
//         console.log(logString);
//         console.log(construtor);
//     }
// }

function WithLogic(logString: string) {
    return function(construtor: any) {
        let personInDecorator = new construtor();
        console.log(logString, personInDecorator.name);
    }
}

@Logger
@WithLogic('LOG-PERSON')
class Person {
    name = 'Tibi';

    constructor() {
        console.log('Creating the object');
    }
}

// const pers = new Person();

// console.log(pers);
