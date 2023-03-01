const addButton = document.querySelector("#inputBar #addButton")
const textField = document.querySelector("#inputBar #textField")

const contextMenu = document.querySelector('#contextMenu')
const cmAddTodo = document.querySelector('#cmAddTodo')

// Declare the addMenu callers

addButton.onclick = () => {   
    if ((textField.value).trim().length == 0) {
      textField.value = ""
      textField.placeholder = "You cannot create a task whose title is blank!"
    
      textField.classList.remove("placeholder-white-300")
      textField.classList.add("placeholder-red-500")

      setTimeout(() => {
        textField.placeholder = "Type here the title of your new task."

        textField.classList.remove("placeholder-red-500")
        textField.classList.add("placeholder-white-300")
      }, 5000)
    } else {

      if (textField.value.length > 45) {
        textField.value = ""
        textField.placeholder = "Max characters reached! Please input a title less long."
    
        textField.classList.remove("placeholder-white-300")
        textField.classList.add("placeholder-red-500")

        setTimeout(() => {
          textField.placeholder = "Type here the title of your new task."

          textField.classList.remove("placeholder-red-500")
          textField.classList.add("placeholder-white-300")
        }, 5000)

    } else {
      const todo = document.createElement("div")
      todo.classList.add(
      "max-w-prose",
      "p-4",
      "border-transparent",
      "border-2",
      "rounded-xl",
      "gap-4",
      "flex",
      "shadow-xl",
      "flex-col",
      "border-t-[#3a3c42]"
      )
      const title = document.createElement("h2")
      title.classList.add("text-2xl")
      title.innerHTML = textField.value

      todo.appendChild(title)
      document.querySelector("#todoContainer").appendChild(todo)

      textField.value = ""

      todo.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        contextMenu.classList.remove("hidden")
        contextMenu.classList.add("block")
        contextMenu.classList.add(`left-[${e.pageX+10}px]`, `top-[${e.pageY+10}px]`)
      })
      cmAddTodo.addEventListener('click', () => {
        const description = document.createElement("p")
        description.innerHTML = "hola"
        todo.appendChild(description)
      }) 
    }
  }
}

document.addEventListener('click', () => {
  contextMenu.classList.remove("block")
  contextMenu.classList.add("hidden")
})

document.addEventListener('contextmenu', (e) => {
  e.preventDefault()
})