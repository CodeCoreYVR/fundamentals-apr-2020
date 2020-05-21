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

function addTask() {
  console.log("add task");
}

function taskDone() {
  console.log("Task Done");
}

function taskEdit() {
  console.log("Task Edit");
}

function taskDelete() {
  console.log("Task Delete");
}
