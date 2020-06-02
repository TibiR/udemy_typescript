interface Course {
    title: string;
    description: string;
    complete: boolean;
}

function createCourse(title: string, description: string, complete: boolean): Course {
    const newCourse: Partial<Course> = {};
    newCourse.title = title;
    newCourse.description = description;

    return newCourse as Course;
}

console.log(createCourse('test', 'desc', false));