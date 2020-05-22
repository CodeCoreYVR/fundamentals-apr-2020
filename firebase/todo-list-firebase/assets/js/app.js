// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOQKCbuVaOOSrpM8zuoAMBZ3RYP9omHo0",
  authDomain: "todo-list-app-da331.firebaseapp.com",
  databaseURL: "https://todo-list-app-da331.firebaseio.com",
  projectId: "todo-list-app-da331",
  storageBucket: "todo-list-app-da331.appspot.com",
  messagingSenderId: "946436779316",
  appId: "1:946436779316:web:975bb899670dfd89920961",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Submitting todos to firebase database
function addTask() {
  const taskTitle = document.querySelector("input[name=task]");
  const taskDate = document.querySelector("input[name=date]");

  if (taskTitle.value && taskDate.value) {
    // the boxes have data and we take them to the database
    const key = firebase.database().ref().child("todo_tasks").push().key;
    // note the .child is gonna create a key in our database and
    // set its name to todo_task
    // console.log("key: ", key);

    // Now let's go ahead and setup our task data
    const task = {
      task: taskTitle.value,
      date: taskDate.value,
      key: key,
    };

    const updateTasks = {};
    updateTasks["/todo_tasks/" + key] = task;
    // below 👇 object will be added to firebase database
    // console.log(updateTasks);
    firebase.database().ref().update(updateTasks);

    // clear title and date after submission
    taskTitle.value = "";
    taskDate.value = "";
    // show the list of tasks on page and re-render
    // the list of tasks with the new task that we just added
    renderTodoTasks();
  }
}

// Render all todo tasks
function renderTodoTasks() {
  const todoTasksContainer = document.getElementById("todo-tasks");
  // clear out the todo tasks container before getting data
  todoTasksContainer.innerHTML = "";

  let tasksArray = [];
  // Note the difference between 'once' and 'on' is that 'once'
  // is called only one time but 'on' is called everytime the
  // value changes
  firebase
    .database()
    .ref("todo_tasks")
    .once("value", function (snapshot) {
      // console.log(snapshot);
      // for every snapshot we just wanna get the child data
      // and then we just wanna get the key and the data value
      snapshot.forEach(function (childSnapshot) {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        // Below 👇 we are converting object to array
        // which is easier to handle
        tasksArray.push(Object.values(childData));
      });

      tasksArray.map(function (task) {
        // console.log(task);
        taskDate = task[0];
        taskKey = task[1];
        taskTitle = task[2];

        // console.log(taskDate, taskKey, taskTitle);
        const taskContainer = document.createElement("li");
        taskContainer.setAttribute(
          "class",
          "list-group-item d-flex justify-content-between"
        );
        taskContainer.setAttribute("data-key", taskKey);

        // Task Data
        const taskData = document.createElement("div");
        taskData.setAttribute("id", "task-data");
        taskData.setAttribute("class", "task-datas");

        const title = document.createElement("p");
        title.setAttribute("id", "task-title");
        title.setAttribute("class", "lead");
        title.setAttribute("contenteditable", "false");
        title.innerText = taskTitle;

        const date = document.createElement("p");
        date.setAttribute("id", "task-date");
        date.setAttribute("class", "lead");
        date.setAttribute("contenteditable", "false");
        date.innerText = taskDate;

        // Task Tools
        const taskTools = document.createElement("div");
        taskTools.setAttribute("id", "task-tools");
        taskTools.setAttribute("class", "task-tools");

        const taskDoneButton = document.createElement("button");
        taskDoneButton.setAttribute("id", "task-done-button");
        taskDoneButton.setAttribute("class", "btn btn-md btn-success");
        taskDoneButton.setAttribute(
          "onclick",
          "taskDone(this.parentElement.parentElement, this.parentElement);"
        );
        const faDone = document.createElement("i");
        faDone.setAttribute("class", "fa fa-check");

        const taskEditButton = document.createElement("button");
        taskEditButton.setAttribute("id", "task-edit-button");
        taskEditButton.setAttribute("class", "btn btn-md btn-secondary");
        taskEditButton.setAttribute(
          "onclick",
          "taskEdit(this.parentElement.parentElement, this);"
        );
        const faEdit = document.createElement("i");
        faEdit.setAttribute("class", "fa fa-pencil");

        const taskDeleteButton = document.createElement("button");
        taskDeleteButton.setAttribute("id", "task-delete-button");
        taskDeleteButton.setAttribute("class", "btn btn-md btn-danger");
        taskDeleteButton.setAttribute(
          "onclick",
          "taskDelete(this.parentElement.parentElement);"
        );
        const faDelete = document.createElement("i");
        faDelete.setAttribute("class", "fa fa-trash");

        todoTasksContainer.append(taskContainer);
        // append task data (title, date)
        taskContainer.append(taskData);
        taskData.append(title);
        taskData.append(date);

        // append task toosl (done, edit, delete) buttons
        taskContainer.append(taskTools);
        taskTools.append(taskDoneButton);
        taskDoneButton.append(faDone);
        taskTools.append(taskEditButton);
        taskEditButton.append(faEdit);
        taskTools.append(taskDeleteButton);
        taskDeleteButton.append(faDelete);
      });
    });
}

// Finish a Task
function taskDone(task, taskTool) {
  // The purpose of this 'done task' is that  whenever
  // we click this button on a task, the task will go over to
  // Done tasks container from Todo tasks container and the
  // second part is to move the task from todo_tasks to
  // done_tasks in firebase
  // console.log("task: ", task);
  // console.log("taskTools: ", taskTool);

  const doneTasksContainer = document.querySelector("#done-tasks");
  task.removeChild(taskTool);
  doneTasksContainer.append(task);
  // We took care of moving task to done tasks container in browser
  // now, let's implement this in firebase as well
  const key = task.getAttribute("data-key");
  const finishedTask = {
    task: task.childNodes[0].childNodes[0].innerText,
    date: task.childNodes[0].childNodes[1].innerText,
    key: key,
  };

  // move task to done_tasks in firebase
  const updateTasks = {};
  updateTasks["/done_tasks/" + key] = finishedTask;
  firebase.database().ref().update(updateTasks);
  // delete task from todo_tasks in firebase
  const taskToRemove = firebase.database().ref("todo_tasks/" + key);
  taskToRemove.remove();
}

// Edit a Task
function taskEdit(task, editButton) {
  editButton.style.backgroundColor = "orange";
  editButton.style.color = "#000"; // black
  editButton.setAttribute(
    "onclick",
    "submitUpdates(this.parentElement.parentElement, this)"
  );

  const title = task.childNodes[0].childNodes[0];
  title.setAttribute("contenteditable", true);
  const date = task.childNodes[0].childNodes[1];
  date.setAttribute("contenteditable", true);
}

function submitUpdates(task, editButton) {
  editButton.style.backgroundColor = "#6c757d"; // grey
  editButton.style.color = "#fff"; // white
  editButton.setAttribute(
    "onclick",
    "taskEdit(this.parentElement.parentElement, this)"
  );

  const title = task.childNodes[0].childNodes[0];
  title.setAttribute("contenteditable", false);
  const date = task.childNodes[0].childNodes[1];
  date.setAttribute("contenteditable", false);

  // Update in firebase as well
  const key = task.getAttribute("data-key");
  const taskObject = {
    task: task.childNodes[0].childNodes[0].innerText,
    date: task.childNodes[0].childNodes[1].innerText,
    key: key,
  };

  const updateTasks = {};
  updateTasks["/todo_tasks/" + key] = taskObject;
  firebase.database().ref().update(updateTasks);
}

// Delete a Task
function taskDelete(task) {
  const key = task.getAttribute("data-key");
  const taskToRemove = firebase.database().ref("todo_tasks/" + key);
  taskToRemove.remove();
  // Also remove it from HTML
  task.remove();
}
