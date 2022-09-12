const todoItems = [];

function addTodo(text) {
    const todo = {
        text,
        checked: false,
        // id: Date.now(),
    };

    todoItems.push(todo);
    console.log(todoItems);
}
// addTodo('deva prasad')

const form = document.querySelector('.todo_input--button');
form.addEventListener('click', e => {
    const input = document.querySelector('.todo_input--field');
    const text = input.value.trim();
    if (text !== '') {
        addTodo(text);
        input.value = '';
        input.focus();
    }
    // element.getElementsByClassName.display='block';
})
let element=document.querySelector('.todo-content')
let list=document.createElement('ul')
list.className="todo_section"
let checkBox=document.createElement('INPUT');
checkBox.setAttribute("type", "checkbox");
for(i=0;i<todoItems.length;i++){
    const item=document.createElement('li');
    item.className = "todo_section--content"; 
    // li.setAttribute("class",)
    item.appendChild(checkBox);
    item.createTextNode(`${todoItems[i].text}`)
    list.appendChild(li);
    

}
// element.appendChild(list)

// function renderTodo(todo) {
//     // Select the first element with a class of `js-todo-list`
//     const list = document.querySelector('.js-todo-list');
  
//     // Use the ternary operator to check if `todo.checked` is true
//     // if so, assign 'done' to `isChecked`. Otherwise, assign an empty string
//     const isChecked = todo.checked ? 'done': '';
//     // Create an `li` element and assign it to `node`
//     const node = document.createElement("li");
//     // Set the class attribute
//     node.setAttribute('class', `todo-item ${isChecked}`);
//     // Set the data-key attribute to the id of the todo
//     node.setAttribute('data-key', todo.id);
//     // Set the contents of the `li` element created above
//     node.innerHTML = `
//       <input id="${todo.id}" type="checkbox"/>
//       <label for="${todo.id}" class="tick js-tick"></label>
//       <span>${todo.text}</span>
//       <button class="delete-todo js-delete-todo">
//       <svg><use href="#delete-icon"></use></svg>
//       </button>
//     `;
  
//     // Append the element to the DOM as the last child of
//     // the element referenced by the `list` variable
//     list.append(node);
//   }