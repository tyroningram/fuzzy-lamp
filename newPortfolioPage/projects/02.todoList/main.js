let todo = [];

const task = document.querySelector(".input");
const submit = document.querySelector(".submit");
const todoList = document.getElementById("todo-list");

todoList.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (
    clickedElement.classList.contains("ri-circle-line") ||
    clickedElement.classList.contains("ri-circle-fill")
  ) {
    toggleIcon(clickedElement);
  }
});

task.addEventListener("keypress", (e) => {
  if (e.keyCode === 13 && task.value !== "") {
    todo.push(task.value);
    createList();
    task.value = "";
  }
});

submit.addEventListener("click", () => {
  if (task.value !== "") {
    todo.push(task.value);
    console.log(todo);
    createList();
    task.value = "";
  }
});

function createList() {
  const listItem = document.createElement("div");
  listItem.classList.add("listItem");

  const icon = document.createElement("i");
  icon.classList.add("ri-circle-line");
  listItem.appendChild(icon);

  const para = document.createElement("li");
  para.innerText = `${todo[todo.length - 1]}`;
  listItem.appendChild(para);

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("ri-close-fill");
  deleteIcon.addEventListener("click", deleteListItem);
  listItem.appendChild(deleteIcon);

  const element = document.getElementById("todo-list");
  element.appendChild(listItem);
}

function toggleIcon(iconElement) {
  if (iconElement.classList.contains("ri-circle-line")) {
    iconElement.classList.remove("ri-circle-line");
    iconElement.classList.add("ri-circle-fill");
  } else if (iconElement.classList.contains("ri-circle-fill")) {
    iconElement.classList.remove("ri-circle-fill");
    iconElement.classList.add("ri-circle-line");
  }
}

function deleteListItem() {
  const listItemContainer = this.parentNode;
  listItemContainer.remove();
}

console.log("clean everything joo".length);
