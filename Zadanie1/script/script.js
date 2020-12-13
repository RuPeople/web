console.log('connected!');

const input = document.querySelector("input[type='text']");
const gb = document.querySelector("button[class='bamf-greenbutton']")


function createToDo() {
	const li = document.createElement("li");
	const textSpan = document.createElement("span");
	textSpan.classList.add("todo-text");
	const newToDo=input.value;
	textSpan.append(newToDo);




	input.addEventListener("keypress", (keyPressed) => {
		const keyEnter=13;
		if (keyPressed.which == keyEnter) {
			createToDo();
		}
	});
	gb.addEventListener("click", onClickToDo)
}

console.log(input);