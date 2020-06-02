
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator..')
    console.log(target);
    console.log(propertyName);
}

function Log2(target: any, propertyName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator..')
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
}


class Product {
    @Log
    title: string;
    constructor(title: string) {
        this.title = title;
    }

    @Log2
    set _title(title: string) {
        this.title = title
    }
}