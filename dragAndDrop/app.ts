// Project Type
enum Status { Active, Finished }

class Project {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public people: number,
        public status: Status
    ) { }
}

type Listener<T> = (items: T[]) => void;

// base STATE CLASS

class State<T> {
    protected listeners: Listener<T>[] = [];
    
    addListener(listenerFN: Listener<T>) {
        this.listeners.push(listenerFN);
    }
}

// PROJECT STATE MANAGEMENT
class ProjectState extends State<Project> {
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
        super();
     }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }

    addProject(title: string, description: string, people: number) {
        const newProject = new Project(Math.random().toString(), title, description, people, Status.Active);

        this.projects.push(newProject);
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}

const projectState = ProjectState.getInstance();

interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

function validate(input: Validatable): boolean {
    let isValid = true;

    if (input.required) {
        isValid = isValid && input.value.toString().trim().length !== 0;
    }

    if (input.minLength != null && typeof input.value === 'string') {
        isValid = isValid && input.value.length > input.minLength;
    }

    if (input.maxLength != null && typeof input.value === 'string') {
        isValid = isValid && input.value.length < input.maxLength;
    }

    if (input.min != null && typeof input.value === 'number') {
        isValid = isValid && input.value > input.min;
    }

    if (input.max != null && typeof input.value === 'number') {
        isValid = isValid && input.value < input.max;
    }

    return isValid;
}

// Component base

abstract class Component<T extends HTMLElement, U extends HTMLElement> {
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor(templateId: string, hostElementId: string, insertAtStart: boolean, newElementId?: string) {
        this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
        this.hostElement = document.getElementById(hostElementId)! as T;

        const importedNode = document.importNode(this.templateElement.content, true);

        //form element
        this.element = importedNode.firstElementChild as U;
        if (newElementId) {
            this.element.id = newElementId;
        }

        this.attach(insertAtStart);
    }

    private attach(insertAtStart: boolean) {
        this.hostElement.insertAdjacentElement(insertAtStart ? 'afterbegin' : 'beforeend', this.element);
    }

    abstract configure?(): void;
    abstract renderContent(): void;
}

// PROJECT LIST
class ProjectList extends Component<HTMLDivElement, HTMLElement> {
    assignedProjects: Project[] = [];

    constructor(private type: 'active' | 'finished') {
        super('project-list', 'app', false, `${type}-projects`);
        this.assignedProjects = [];

        this.configure();
        this.renderContent();
    }

    private renderProjects() {
        const listEl = document.getElementById(`${this.type}-project-list`)! as HTMLUListElement;
        listEl.innerHTML = '';
        for (const item of this.assignedProjects) {
            const listItem = document.createElement('li');
            listItem.textContent = item.title;
            listEl.appendChild(listItem);
        }
    }

    configure() {
        projectState.addListener((projects: Project[]) => {
            const relevantProject = projects.filter(prj => {
                if (this.type === 'active') {
                    return prj.status === Status.Active;
                }
                return prj.status === Status.Finished;
            });
            this.assignedProjects = relevantProject;
            this.renderProjects();
        });
    }

    renderContent() {
        const listId = `${this.type}-project-list`;
        this.element.querySelector('ul')!.id = listId;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' Projects';
    }
}

// PROJECT INPUT
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>  {

    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
        this.configure();
    }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        if (
            !validate({ value: enteredTitle, required: true }) ||
            !validate({ value: enteredDescription, required: true, minLength: 5 }) ||
            !validate({ value: +enteredPeople, required: true, min: 1, max: 6 })
        ) {
            alert('invalid input!');
        } else {
            return [enteredTitle, enteredDescription, +enteredPeople];
        }

    }

    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();

        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;

            console.log(title, desc, people);
            this.clearInputs();
            projectState.addProject(title, desc, people);
        }
    }

    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }

    renderContent() { }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }
}

const new_input = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishProjectList = new ProjectList('finished');