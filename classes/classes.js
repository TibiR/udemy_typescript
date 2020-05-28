"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Departaments (${this.id}): ${this.name}`);
    }
    add(employee) {
        this.employees.push(employee);
    }
    show() {
        console.log('employees: ', this.employees);
    }
}
class ITDepartament extends Department {
    constructor(webDep, id, name) {
        super(id, name);
        this.webDep = webDep;
    }
    searchEmployee(txt) {
        console.log('search result : ', this.employees.filter((e) => e === txt));
    }
}
const itDep = new ITDepartament(true, 'iT', 'IT Departament');
itDep.add('Tibi');
itDep.add('Tibi2');
itDep.show();
itDep.searchEmployee('Tibi');
itDep.describe();
