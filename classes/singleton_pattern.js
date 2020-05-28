"use strict";
class BaseDepartament {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class DesignDepartament extends BaseDepartament {
    constructor(id, name) {
        super(id, name);
    }
    static getIntance() {
        if (DesignDepartament.instance) {
            return DesignDepartament.instance;
        }
        DesignDepartament.instance = new DesignDepartament('de1', 'Design');
        return DesignDepartament.instance;
    }
    describe() {
        console.log(this.id, ', ', this.name);
    }
}
const design1 = DesignDepartament.getIntance();
design1.describe();
const design2 = DesignDepartament.getIntance();
design2.describe();
const design3 = DesignDepartament.getIntance();
design3.describe();
