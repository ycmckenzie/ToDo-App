window.addEventListener('load', function() {
  const addTaskBtn = document.querySelector("#add-task-btn");
  const input = document.querySelector("#new-task-input");
  const taskList = document.querySelector("#task-list");
  const inputCont = document.querySelector("#input-section");

  const errorMess = document.createElement("div");
  errorMess.classList.add("error-message");
  errorMess.innerText = "";
  inputCont.append(errorMess);

  const placeHolder = document.createElement("div");
  placeHolder.classList.add("placeholder-text");
  placeHolder.innerText = "All Caught Up";
  taskList.append(placeHolder);

  addTaskBtn.addEventListener("click", function(event) {
    event.preventDefault();
  })

  addTaskBtn.addEventListener("click", function() {
    let inputValue = input.value;

    if (!inputValue){
      input.focus();
      errorMess.innerText = "Must enter a task";
    }
    else {
      errorMess.innerText = "";
      placeHolder.innerText = "";
      input.value = "";
      
      //Creating div to hold "content" & "action-btns" divs
      let newTask = document.createElement("div");
      newTask.classList.add("task");
      //adding to "taskList"
      taskList.append(newTask);

      //Creating "content" div to hold text
      let newContent = document.createElement("div");
      newContent.classList.add("content");
      //adding to parent
      newTask.append(newContent);

      //Creating "text" div  & applying user input 
      let newText = document.createElement("input");
      newText.readOnly = true;
      newText.value = inputValue;
      newText.classList.add("text")
      //adding to parent
      newContent.append(newText);

      //Creating button container
      let btnContainer = document.createElement("div")
      btnContainer.classList.add("action-btns")
      newTask.append(btnContainer);
      
      //Creating new edit button
      let editBtn = document.createElement("button");
      editBtn.classList.add("edit-btn");
      editBtn.innerText = "Edit";
      //adding to parent 
      btnContainer.append(editBtn);

      //Creating new delete button
      let deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("class", "delete-btn");
      deleteBtn.innerText = "Delete";
      //adding to parent 
      btnContainer.append(deleteBtn);

      editBtn.addEventListener("click", function (){
        if(editBtn.innerText == "Edit"){
          newText.readOnly = false;
          newText.focus();
          editBtn.innerText = "Save";
          editBtn.style.color = "#90EE90";
        }
        else{
          newText.readOnly = true;
          editBtn.innerText = "Edit";
          editBtn.style.color = "#EAEAEA";
        }
        
      })

      deleteBtn.addEventListener("click", function(){
        deleteBtn.parentElement.parentElement.remove();
        if(taskList.children.length == 2){
          placeHolder.innerText = "All Caught Up";
        }
      })
    }
  })
})