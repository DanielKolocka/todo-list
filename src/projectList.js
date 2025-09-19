import { project } from "./project";

function projectList () {
    const projectList = [];
    let activeProject = projectList[0];

    const addProject = (project) => {
        projectList.push(project);
    }
    const getProjectList = () => {
        return projectList;
    }

    const setActiveProject = (project) => {
        activeProject = project;
    }
    const getActiveProject = () => {
        return activeProject;
    }

    const createProjectList = () => {
        const containerDiv = document.createElement("div");
        containerDiv.setAttribute("class", "projectsContainer");
        
        const projectListUl = document.createElement("ul");
        projectListUl.setAttribute("class", "projectList");

        let counter = 0;
        const toDoListDiv = document.querySelector(".toDoList");
        projectList.forEach(project => {
            const projectDiv = document.createElement("li");
            projectDiv.textContent = project.getTitle(); //Project Title
            projectDiv.setAttribute("id", counter++);

            projectDiv.addEventListener('click', (e) => {
                console.log(e.target.id);
                // Set the clicked project to active
                setActiveProject(projectList[e.target.id]);
                // create To-DO list cards for that active project
                toDoListDiv.replaceChildren();
                toDoListDiv.appendChild(projectList[e.target.id].showToDoList());
                

            });
            
            projectListUl.appendChild(projectDiv);
        });

        containerDiv.appendChild(projectListUl);

        return containerDiv;
    }

    return {addProject, getProjectList, createProjectList, getActiveProject, setActiveProject};
}

export {projectList}
