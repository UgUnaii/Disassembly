// --- Document Objects
const createTaskButton = document.querySelector('#inputBar #addButton')
const createTaskInput = document.querySelector('#inputBar #textField')

const charCounter = document.querySelector('#inputBar #charCount')
const charCounterSpan = document.querySelector('#inputBar #charCount span')

const contextMenu = document.querySelector('#contextMenu')
const cmAddTodo = document.querySelector('#contextMenu #cmAddTodo')

const taskWrapper = document.querySelector('#todoContainer')



// --- Main
createTaskButton.onclick = () => {

  // Check if the input is in blank, if so, do not create the task
  if (checkInputNull(createTaskInput)) {
    // Set the placeholder as an error mesage
    createTaskInput.value = ""
    createTaskInput.placeholder = "You cannot create a task whose title is blank!"
    
    createTaskInput.classList.replace("placeholder-white-300", "placeholder-red-500")

    // Turn the placeholder to the normal state after 5s
    setTimeout(() => {
      createTaskInput.placeholder = "Type here the title of your new task."

      createTaskInput.classList.replace("placeholder-red-500", "placeholder-white-300")
    }, 5000)

  // If input is not in blank, then create the task
  } else {
    // Create the container
    const task = document.createElement("div")
    task.classList.add(
      "max-w-prose",
      "p-4",
      "border-transparent",
      "border-2",
      "rounded-xl",
      "gap-4",
      "flex",
      "shadow-xl",
      "flex-col",
      "border-t-[#3a3c42]",
      "h-min"
    )
    
    // Create title
    const title = document.createElement("h2")
    title.classList.add("text-2xl")
    title.innerText = textField.value.trim().substring(0, 40)

    // Append elements
    append(title, task)
    append(task, taskWrapper)

    // Earse the input value after creating a task
    createTaskInput.value = ""

    // Add an event listener to the task, for the rClick menu
    task.addEventListener('contextmenu', (e) => taskContextMenu(e))
  }
}

// Count characters of input field and don't be higher than 40
setInterval(() => {
  charCounterSpan.innerHTML = createTaskInput.value.trim().length
  
  if (createTaskInput.value.trim().length >= 40) {
    createTaskInput.value = createTaskInput.value.trim().substring(0, 40)
    charCounter.classList.replace("text-white", "text-red-500")
  } else {
    charCounter.classList.replace("text-red-500", "text-white")
  }
}, 200)



// --- Context Menu
function taskContextMenu(e) {
  e.preventDefault()
  contextMenu.classList.replace("hidden", "block")
  contextMenu.classList.add(`left-[${e.pageX+10}px]`, `top-[${e.pageY+10}px]`)
  
  cmAddTodo.onclick = () => addTodoContextMenu(e.target)
}

function addTodoContextMenu(t) {
  
}

// Prevent rClick on webpage & hide menu when lClick
document.addEventListener('contextmenu', (e) => e.preventDefault())
document.addEventListener('click', () => {
  contextMenu.classList.replace("block", "hidden")
})



// --- Auxiliar Functions
function checkInputNull(i) {
  if (i.value.trim().length == 0) {
    return true;
  }
}

function append(c, p) {
  p.appendChild(c)
}