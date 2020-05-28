abstract class BaseDepartament {
    constructor(protected id: string, protected name: string) {}

    abstract describe(): void;
}

class DesignDepartament extends BaseDepartament {
    private static instance: DesignDepartament;
    private constructor(id: string, name: string){
        super(id, name);
    }

    static getIntance() {
        if(DesignDepartament.instance) {
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


