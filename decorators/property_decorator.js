"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(target, propertyName) {
    console.log('Property decorator..');
    console.log(target);
    console.log(propertyName);
}
function Log2(target, propertyName, descriptor) {
    console.log('Accessor decorator..');
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
}
let Product = /** @class */ (() => {
    class Product {
        constructor(title) {
            this.title = title;
        }
        set _title(title) {
            this.title = title;
        }
    }
    __decorate([
        Log
    ], Product.prototype, "title", void 0);
    __decorate([
        Log2
    ], Product.prototype, "_title", null);
    return Product;
})();
