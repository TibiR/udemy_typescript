"use strict";
function createCourse(title, description, complete) {
    const newCourse = {};
    newCourse.title = title;
    newCourse.description = description;
    return newCourse;
}
console.log(createCourse('test', 'desc', false));
