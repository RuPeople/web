console.log('connected!');


//todo
let addMessage = document.querySelector('#bamf-textbox');
let addButton=document.querySelector('.bamf-greenbutton');

let todo = document.querySelector('.bamf-todolist-list');

let todoList =[];

addButton.addEventListener('click', function() {
	
	let newToDo= {
		ToDo: addMessage.value,
		checked: false,

	};

	todoList.push(newToDo);
	displayMessages();

});


function displayMessages() {
	let displayMessage = '';
	todoList.forEach(function(item,i){
		displayMessage += `
		<li>
			<input class="task" type='checkbox' id='item_${i}' ${item.cheked ? array.splice(i,1)  : 2 }>
			<label for='item_${i}'>${item.ToDo}</label>
			<button class="bamf-redbutton" id='item_${i}'>-</button>
		</li>
		`;
		todo.innerHTML = displayMessage;
	});
}


//dark theme
const checkbox = document.querySelector('#mode');
const body = document.querySelector('body');

checkbox.addEventListener('change', () => {

	document.body.classList.toggle('dark');

});

const task = document.querySelector('.task');

