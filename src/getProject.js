function getProject() {
    let userInput = prompt("Enter the name of your new Project:");
    if (userInput != null) {
        return userInput;
    }
    else {
        console.log("User cancelled the input.");
    }
    
}

export {getProject}

