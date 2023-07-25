// Get the elements from the HTML document
const todoInput = document.getElementById('todoInput'); // Get the input field for the todo item
const addBtn = document.getElementById('addBtn'); // Get the button to add a todo item
const todoList = document.getElementById('todoList'); // Get the list to display the todo items

// Add event listener to the add button
addBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim(); // Get the value of the input field and remove leading/trailing whitespace

    // Check if the todo text is not empty
    if (todoText !== '') {
        const li = document.createElement('li'); // Create a new list item element
        li.innerHTML = `
            <input type="checkbox">
            <span>${todoText}</span>
            <button class="delete-btn">Delete</button>
        `; // Set the innerHTML of the list item to include a checkbox, the todo text, and a delete button
        todoList.appendChild(li); // Append the list item to the todo list
        todoInput.value = ''; // Clear the input field
    }
});

// Add event listener to the todo list
todoList.addEventListener('click', (event) => {
    const target = event.target; // Get the target element that triggered the event

    // Check if the target element is a checkbox
    if (target.tagName === 'INPUT' && target.type === 'checkbox') {
        const todoItem = target.parentNode; // Get the parent node of the checkbox (the list item)

        // Check if the checkbox is checked
        if (target.checked) {
            todoItem.classList.add('done'); // Add the 'done' class to the list item
            todoList.appendChild(todoItem); // Move the list item to the end of the todo list
        } else {
            todoItem.classList.remove('done'); // Remove the 'done' class from the list item
            todoList.insertBefore(todoItem, todoList.firstChild); // Move the list item to the beginning of the todo list
        }
    } 
    // Check if the target element has the 'delete-btn' class
    else if (target.classList.contains('delete-btn')) {
        target.parentNode.remove(); // Remove the parent node of the delete button (the list item)
    }
});