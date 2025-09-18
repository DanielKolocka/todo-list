import { toDoItem } from "./toDoItem";
import { projectList } from "./projectList";
import { project } from "./project";
import { getProject } from "./getProject";

import "./styles.css";

const dialog = document.querySelector("dialog");
const addToDoButton = document.querySelector("#addToDoButton");
addToDoButton.addEventListener('click', () => {
    dialog.showModal();
});

const projects = projectList();
// const temp1 = project("test1");
// const temp2 = project("test2");
// projects.addProject(temp1);
// projects.addProject(temp2);

const projectsDiv = document.querySelector(".projects");
// projectsDiv.appendChild(projects.createProjectList());

// Close the modal when clicking outside of it
dialog.addEventListener('click', (e) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        dialog.close();
    }
});

let activeProject = null;
const dialogTitle = document.querySelector("#toDoTitle");
const dialogDescription = document.querySelector("#toDoDescription");
const dialogDueDate = document.querySelector("#toDoDueDate");
const dialogSubmitButton = document.querySelector("#submitModalButton");
dialogSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const newTodo = toDoItem(dialogTitle.value, dialogDescription.value, dialogDueDate.value);
    // implement logic to get active project -> TODO 
    activeProject = projects.getActiveProject();
    // Add newToDO to active project
    activeProject.addItem(newTodo);
    activeProject.showToDoList(); //update screen to show active projects
    // loop through active projects, add listen to each on click to set as active and display their lists
    // Update the screen.
});



// const temp1 = project("test1");
// const temp2 = project("test2");
// projects.addProject(temp1);
// projects.addProject(temp2);

const createProjectButton = document.querySelector("#addProjectButton");
createProjectButton.addEventListener('click', (e) => {
    const projectName = getProject();
    if (projectName != null) {
        const newProject = project(projectName);
        projects.addProject(newProject);
        projectsDiv.replaceChildren();
        projectsDiv.appendChild(projects.createProjectList());
        projects.setActiveProject(newProject);
        console.log(projects.getActiveProject().getTitle());
    }
});


// Fake item from DOM
const item = {
    "title" : "15 Pushups",
    "description" : "I need to do 15 pushups",
    "dueDate" : "10-28-1999",
    "priority": "high"
}

