
class ToDoItem {

    constructor(content, date) {
        this.id = Math.random().toString(36).substring(7);
        this.content = content;
        this.date = date;
        this.completed = false;
    }


    static fromJSON (json) {
        let toDoItem = new ToDoItem();
        toDoItem.id = json.id;
        toDoItem.content = json.content;
        toDoItem.date = json.date;
        toDoItem.completed = json.completed;

        return toDoItem;
    }
}

export default ToDoItem;