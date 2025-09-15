import { toDoItem } from "./toDoItem";
import { projectList } from "./projectList";
import { project } from "./project";
import { getProject } from "./getProject";

import "./styles.css";

const projects = projectList();
const projectsDiv = document.querySelector(".projects");
// projectsDiv.appendChild(projects.createProjectList());

const createProjectButton = document.querySelector("#addProjectButton");
createProjectButton.addEventListener('click', (e) => {
    const projectName = getProject();
    if (projectName != null) {
        const newProject = project(projectName);
        projects.addProject(newProject);
        projectsDiv.replaceChildren();
        projectsDiv.appendChild(projects.createProjectList());
    }
});

const createToDoButton = document.querySelector("#addToDoButton");
createToDoButton.addEventListener('click', () => {
    //Open modal to create a ToDo Item
    
    // Create the to-do Item and add it to the active project

    // Update screen
});





// const projectChores = project("Chores");
// const projectStudy = project("Study");

// projects.addProject(projectChores);
// projects.addProject(projectStudy);



// Fake item from DOM
const item = {
    "title" : "15 Pushups",
    "description" : "I need to do 15 pushups",
    "dueDate" : "10-28-1999",
    "priority": "high"
}
const item2 = {
    "title" : "10 Pushups",
    "description" : "I need to do 10 pushups",
    "dueDate" : "10-28-2020",
    "priority": "low"
}

// const chores = project("Chores");
// const toDo1 = createItem(item);
// chores.addItem(toDo1);
// chores.showToDoList();
// toDo1.getItem();

// toDoItem.getItem();