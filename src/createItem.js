// A function that creates and returns an object
function createItem (item) {
    const title = item.title;
    const description = item.description;
    const dueDate = item.dueDate;
    const priority = item.priority;
    let isComplete = false;

    // A method to retrieve the item's details
    const getItem = () => {
        console.log(`Title: ${title}, Description: ${description}, Due Date: ${dueDate}, Priority: ${priority}, isComplete: ${isComplete}`);
        return {
            title,
            description,
            dueDate,
            priority,
            isComplete
        };
    };

    const completeItem = () => {
        isComplete = true;
        return;
        // return {
        //     title,
        //     description,
        //     dueDate,
        //     priority,
        //     isComplete
        // };
    }

    // Return an object that contains the getItem method
    return { getItem, completeItem };
}

// Export the factory function itself, not the inner function
export { createItem };