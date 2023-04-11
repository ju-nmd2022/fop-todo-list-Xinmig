//for Addmission Buttopn
const addMission = document.getElementById("add");
//Arrays
let myTasks = [];
let modeOfTask = [];
//The values inside the array are the locally stored values
myTasks = localData = JSON.parse(window.localStorage.getItem("allMyTasks"));
//give a value for all ul
let taskList = document.querySelector("ul");
//rebuild and loaad
allNew();

addMission.addEventListener("click", function buildMission() {
  //for input
  let taskInput = document.getElementById("todo").value;
  //save myTask
  console.log(myTasks);
  //if have sometings save in the myTask
  if (taskInput != "") {
    myTasks.push(taskInput);
  } else {
    alert("you need enter something.");
  }
  //save the value of mytasks in the local
  localStorage.setItem("allMyTasks", JSON.stringify(myTasks));
  //add new element
  allNew();
});

function allNew() {
  //clear innertext
  taskList.innerHTML = "";
  //build newtasks
  for (i = 0; i < myTasks.length; i++) {
    let a = i;
    let newDiv = document.createElement("div");
    newDiv.classList.add("listDiv");
    let newList = document.createElement("li");
    newList.classList.add("new");
    let cancelListButton = document.createElement("button");
    cancelListButton.classList.add("cancelButton");
    //the text in the new element are the text in the array
    newList.innerText = myTasks[i];
    cancelListButton.innerText = "✖";
    newDiv.appendChild(newList);
    newDiv.appendChild(cancelListButton);
    taskList.appendChild(newDiv);

    //change after complete
    newList.addEventListener("click", () => {
      let mode = (myTasks[a] = 1);
      modeOfTask.push(mode);
      if (mode === 1) {
        mode = myTasks[a] = 2;
      }
      localStorage.setItem("taskMode", mode);
      console.log(JSON.parse(window.localStorage.getItem("taskMode")));
      if (mode === 2) {
        newList.style.backgroundColor = "#256d85";
        newList.style.textDecoration = "line-through";
      }
    });

    //delete mission
    cancelListButton.addEventListener("click", () => {
      deleteTask(a);
    });
  }
  if (JSON.parse(window.localStorage.getItem("taskMode") === 2)) {
    newList.style.backgroundColor = "#256d85";
    newList.style.textDecoration = "line-through";
  }
}

//use a as index to delete task
function deleteTask(a) {
  myTasks.splice(a, 1);
  allNew();
  localStorage.setItem("allMyTasks", JSON.stringify(myTasks));
}

if (JSON.parse(window.localStorage.getItem("taskMode")) === 2) {
  newList.style.backgroundColor = "#256d85";
  newList.style.textDecoration = "line-through";
}
