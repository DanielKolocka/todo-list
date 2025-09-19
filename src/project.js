function project(projectTitle) {
    const title = projectTitle;
    const toDoList = [];

    const addItem = (toDoItem) => {
        toDoList.push(toDoItem);
    }
    const showToDoList = () => {
        const container = document.createElement("div");
        container.setAttribute("class", "toDoItemsContainer");
        toDoList.forEach(toDoItem => {
            const tempItem = toDoItem.getItem();

            const toDoContainer = document.createElement("div");
            toDoContainer.setAttribute("class", "toDoItem");
            
            const itemTitle = document.createElement("p");
            itemTitle.textContent = `Title: ${tempItem.title}`;

            const itemDescription = document.createElement("p");
            itemDescription.textContent = `Description: ${tempItem.description}`;

            const itemDueDate = document.createElement("p");
            itemDueDate.textContent = `Due Date: ${tempItem.dueDate}`;

            const editButton = document.createElement("button");
            editButton.setAttribute("id", "changeStatus");
            editButton.textContent = "Edit";

            const deleteButton = document.createElement("button");
            deleteButton.setAttribute("id", "deleteItem");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener('click', (e) => {
                console.log(e); //
            });

            toDoContainer.appendChild(itemTitle);
            toDoContainer.appendChild(itemDescription);
            toDoContainer.appendChild(itemDueDate);
            toDoContainer.appendChild(editButton);
            toDoContainer.appendChild(deleteButton);

            container.appendChild(toDoContainer);
        });
        return container;
    }
    // <div class="toDoItem">
    //             <p>Take out Trash</p>
    //             <p>Garbage truck coming at 9, garbage out by 8:30</p>
    //             <p>2025-05-01</p>
    //         <button id="changeStatus">Edit</button>
    //         <button id="deleteItem">Delete</button>
    //         </div>

    const getToDoList = () => {
        return toDoList;
    }

    const getTitle = () => {
        return title;
    }

    return {addItem, showToDoList, getToDoList, getTitle}
}

export {project}