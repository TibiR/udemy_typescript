"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(construtor) {
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
function WithLogic(logString) {
    return function (construtor) {
        let personInDecorator = new construtor();
        console.log(logString, personInDecorator.name);
    };
}
let Person = /** @class */ (() => {
    let Person = class Person {
        constructor() {
            this.name = 'Tibi';
            console.log('Creating the object');
        }
    };
    Person = __decorate([
        Logger,
        WithLogic('LOG-PERSON')
    ], Person);
    return Person;
})();
// const pers = new Person();
// console.log(pers);
