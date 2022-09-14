let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now()
  }
  todoItems.push(todo)
  // localStorage.setItem("todoItems",JSON.stringify(todoItems))
  renderTodo(todo)

}
// renderTodo();

const form = document.querySelector('.todo_input--button');
form.addEventListener('click', e => {
  const input = document.querySelector('.todo_input--field');
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
    input.focus();
  }

  // renderTodo();
})
// element.getElementsByClassName.display='block';
// let element=document.querySelector('.todo-content')
// let list=document.createElement('ul')
// list.className="todo_section"
// let checkBox=document.createElement('INPUT');
// checkBox.setAttribute("type", "checkbox");
// for(i=0;i<todoItems.length;i++){
//     const item=document.createElement('li');
//     item.className = "todo_section--content"; 
//     // li.setAttribute("class",)
//     item.appendChild(checkBox);
//     item.createTextNode(`${todoItems[i].text}`)
//     list.appendChild(li);
// }
// element.appendChild(list)

// function renderTodo(todo) {
//   const list = document.querySelector('.todo-content');
//   // const item = document.querySelector(`[data-key='${todo.id}']`);
//   const isChecked = todo.checked ? 'done' : '';
//   const node = document.createElement("li");
//   node.setAttribute('class', `todo-item ${isChecked}`);
//   // node.setAttribute('id', `${id}`);
//   // Set the data-key attribute the id of the todo
//   node.setAttribute('data-key', todo.id);
//   // Set the contents of the `li` element created above
//   node.innerHTML = `
//   <div>
//     <span>${todo.text}</span>
//     </div>
//     <div>
//     <button class="delete-todo js-delete-todo">
//     <i class="fa-solid fa-trash"></i>
//     </button>
//     <button class="edit-todo">
//     <i class="fa-solid fa-pen-to-square"></i>
//     </button>
//     </div>
//   `;
//   list.append(node);
// }
// todoItems.forEach(renderTodo)
function renderTodo(todo) {
  localStorage.setItem('todoItemsRef', JSON.stringify(todoItems)); 
  
  list = document.querySelector('.todo-content');
  // const isChecked = todo.checked ? 'done' : '';
  const node = document.createElement("li");
  node.setAttribute('class', `todo-item`);
  // node.setAttribute('id', `${id}`);
  // Set the data-key attribute the id of the todo
  node.setAttribute('data-key', todo.id);
  // Set the contents of the `li` element created above
  // todoItems.array.forEach((ele)=> {
  //   // console.log(`${element}`)
  node.innerHTML = `
        <div>
          <span>${todo.text}</span>
          </div>
          <div>
          <button class="delete-todo js-delete-todo" onclick="deleteData(${k})">
          <i class="fa-solid fa-trash"></i>
          </button>
          <button class="edit-todo" >
          <i class="fa-solid fa-pen-to-square"></i>
          </button>
          </div>
        `;



  list.append(node);

}
function deleteData(key){

}
document.addEventListener('DOMContentLoaded', () => {
  const ref = localStorage.getItem('todoItemsRef');
  if (ref) {
    todoItems = JSON.parse(ref);
    todoItems.forEach(t => {
      renderTodo(t);
    });
  }
});