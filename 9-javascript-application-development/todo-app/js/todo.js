var ToDo = function (rootElementAll, rootElementActive, rootElementCompleted) {

  this.rootElementAll = rootElementAll;
  this.rootElementActive = rootElementActive;
  this.rootElementCompleted = rootElementCompleted;

  let ToDoItem = function (content, date) {
    this.id = Math.random().toString(36).substring(7);
    this.content = content;
    this.date = date;
    this.completed = false;
  }

  let ToDoItemViewModel = function (toDoItem, views) {
    this.data = toDoItem;
    this.views = views;
  }

  let toDoItems = [];

  const TODO_ITEM_TEMPLATE = `
    <div class="todo-item-date">
      <span class="day">Nov</span>
      <span class="month">2020</span>
    </div>
    <div class="todo-item-content">
      <span class="data">Lorem ipsum dolor sit amet.</span>
    </div>
    <span class="delete-btn" title="delete"></span>
  `;

  function generateToDoItemView(toDoItem) {
    //first, create root element
    let toDoItemRoot = document.createElement('div');
    toDoItemRoot.classList.add("todo-item");
    toDoItemRoot.setAttribute('data-id', toDoItem.id);
    toDoItemRoot.innerHTML = TODO_ITEM_TEMPLATE;

    toDoItemRoot.getElementsByClassName("day")[0].innerHTML = toDoItem.date.toLocaleString('default', { day: 'numeric' });
    toDoItemRoot.getElementsByClassName("month")[0].innerHTML = toDoItem.date.toLocaleString('default', { month: 'short' });
    var dataElem = toDoItemRoot.getElementsByClassName("data")[0].innerHTML = toDoItem.content;
    toDoItemRoot.getElementsByClassName("delete-btn")[0].setAttribute('data-id', toDoItem.id);

    toDoItemRoot.classList.add(toDoItem.completed ? "completed" : null);

    let toDoItemRootCopy = toDoItemRoot.cloneNode(true);

    rootElementAll.append(toDoItemRoot);

    if (toDoItem.completed) {
      rootElementCompleted.append(toDoItemRootCopy);
    } else {
      rootElementActive.append(toDoItemRootCopy);
    }

    let toDoItemViewModel = new toDoItemViewModel(toDoItem, [toDoItemRoot, toDoItemRootCopy]);
    toDoItems.push(toDoItemViewModel);

    //register handlers for delete button
    registerDeleteHanders(toDoItemViewModl);

    //register handlers for click on item
    registerClickHandlers(toDoItemViewModel);
  }

} 