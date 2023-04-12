//Arrays for task mode
let mode = [];
mode = JSON.parse(window.localStorage.getItem("taskMode"));
//for Addmission Buttopn
const addMission = document.getElementById("add");
//Arrays for task
let myTasks = [];
//The values inside the array are the locally stored values
myTasks = localData = JSON.parse(window.localStorage.getItem("allMyTasks"));
//give a value for all ul
let taskList = document.querySelector("ul");
//rebuild and loaad
allNew();

addMission.addEventListener("click", function buildMission() {
  //for input
  let taskInput = document.getElementById("todo").value;
  //check myTask
  console.log(myTasks);
  //if have sometings save in the myTask
  if (taskInput != "") {
    myTasks.push(taskInput);
    mode.push(1);
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
  if (myTasks != []) {
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
      //just test
      console.log(JSON.parse(window.localStorage.getItem("taskMode")));
      //change if the mode is already 2
      if (mode[a] === 2) {
        newList.style.backgroundColor = "#256d85";
        newList.style.textDecoration = "line-through";
      }

      //change after complete
      newList.addEventListener("click", () => {
        listStyle(a, newList);
      });

      //delete mission
      cancelListButton.addEventListener("click", () => {
        deleteTask(a);
      });
    }
  }
  //build newtasks
}

//use a as index to delete task
function deleteTask(a) {
  myTasks.splice(a, 1);
  mode.splice(a, 1);
  //and save the current data
  localStorage.setItem("taskMode", JSON.stringify(mode));
  localStorage.setItem("allMyTasks", JSON.stringify(myTasks));
  //then reload
  allNew();
}

//change style function
function listStyle(a, newList) {
  //add 2 in mode
  mode.splice(a, 1, 2);
  //save 2
  localStorage.setItem("taskMode", JSON.stringify(mode));
  //test if the task complete
  if (mode[a] === 2) {
    newList.style.backgroundColor = "#256d85";
    newList.style.textDecoration = "line-through";
  }
}
