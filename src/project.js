function project(projectTitle) {
    const title = projectTitle;
    const toDoList = [];

    const addItem = (toDoItem) => {
        toDoList.push(toDoItem);
    }
    const showToDoList = () => {
        toDoList.forEach(toDoItem => {
            console.log(title + ": " + toDoItem);
            
        });
        return;
    }

    const getToDoList = () => {
        return toDoList;
    }

    const getTitle = () => {
        return title;
    }

    return {addItem, showToDoList, getToDoList, getTitle}
}

export {project}