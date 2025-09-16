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

    const deleteProject = () => {}


    const createProjectList = () => {
        const containerDiv = document.createElement("div");
        containerDiv.setAttribute("class", "projectsContainer");

        // const projectsTitle = document.createElement("h2");
        // projectsTitle.textContent = "Projects";
        
        const projectListUl = document.createElement("ul");
        projectListUl.setAttribute("class", "projectList");

        // const addProjectButton = document.createElement("button");
        // addProjectButton.setAttribute("id", "addProjectButton");
        // addProjectButton.textContent = "+ Project";

        projectList.forEach(project => {
            const projectDiv = document.createElement("li");
            projectDiv.textContent = project.getTitle(); //Project Title
            
            projectListUl.appendChild(projectDiv);
        });

        // containerDiv.appendChild(projectsTitle);
        // containerDiv.appendChild(addProjectButton);
        containerDiv.appendChild(projectListUl);

        return containerDiv;
    }

    return {addProject, getProjectList, createProjectList};
}

export {projectList}
