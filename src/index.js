import { createItem } from "./createItem";
import { itemList } from "./itemList";


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
let toDoList = itemList();
let toDoItem = createItem(item);
let toDoItem2 = createItem(item2);

toDoList.addItem(toDoItem);
toDoList.addItem(toDoItem2);
toDoList.showList();
toDoItem.completeItem();
toDoList.showList();


// toDoItem.getItem();