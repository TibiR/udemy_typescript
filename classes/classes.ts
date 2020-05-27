class Department<T> {
    protected employees: T[] = [];

    constructor(
        private id: T,
        private name: T,
    ) {}

    describe(this: Department<T>) {
        console.log(`Departaments (${this.id}): ${this.name}`);
    }

    add(employee: T) {
        this.employees.push(employee);
    }

    show(this: Department<T>) {
        console.log('employees: ', this.employees);
    }
}

class ITDepartament extends Department<string> {
    constructor(private webDep: boolean, id: string, name: string) {
        super(id, name);
    }

    searchEmployee(txt: string) {
        console.log('search result : ', this.employees.filter((e: string) => e === txt));
    }

}

const itDep = new ITDepartament(true, 'iT', 'IT Departament');
itDep.add('Tibi');
itDep.show();
itDep.searchEmployee('Tibi');
itDep.describe();