const form = document.querySelector("#task-form"); //task input form
const taskList = document.querySelector(".collection"); //ul
const clearBtn = document.querySelector(".clear-tasks"); //clear tasks
const filter = document.querySelector("#filter"); //filter input
const taskInput = document.querySelector("#task"); //new task input

//Load all event listeners
loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", addTask);
  //remove task ui from ul using event delegation
  taskList.addEventListener("click", removeTask);
  clearBtn.addEventListener('click',clearTasks);
  filter.addEventListener('keyup',filterTasks);
}

function filterTasks(e){
    const text=e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item')
    .forEach((list)=>{
        const textInList=list.firstChild.textContent;
        if(textInList.toLowerCase().indexOf(text)!=-1){
            list.style.display='block';
        }else{
            list.style.display='none';
        }
    });
}



function clearTasks(e) {
  //console.log(e.target);
  //taskList.innerHTML='';
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  e.preventDefault()
}

//Add task
function addTask(e) {
  if (taskInput.value === "" || taskInput.value.trim().length === 0) {
    alert("Add a new task");
  } else {
    //create li emement
    const li = document.createElement("li");
    li.className = "collection-item";
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    //create anchor link
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //append the anchor link to li
    li.appendChild(link);
    //console.log(li);
    //append li to ul
    taskList.appendChild(li);
    taskInput.value = "";
    e.preventDefault();
  }
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}
