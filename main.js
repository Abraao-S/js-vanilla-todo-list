   //getting the DOM elements
   const form = document.querySelector('form');
   const input = document.querySelector("[name='type-new-to-do']");
   const todoList = document.getElementById('todo-list');

   // defining an array to store the actual to-do items in the list
   const todoData = [];

   // updates the UI to create new to-do items
   function addTodo(todoText) {
       todoData.push(todoText);
       const li = document.createElement('li');
       li.innerHTML = todoText;
       todoList.appendChild(li);
       localStorage.setItem('todo-list', JSON.stringify(todoData));
   }

   // events
   form.onsubmit = (event) => {    // "GlobalEventHandlers.onsubmit" is an event handler representing the code to be called when the submit event is raised.
       event.preventDefault(); // prevents from refreshing the page
       addTodo(input.value);
   }

   const existingTodos = JSON.parse(localStorage.getItem('todo-list'));
   const newTodoData = existingTodos || [];
   
   // realod items when page reloads
   newTodoData.forEach( todo => {
       addTodo(todo);
   });
