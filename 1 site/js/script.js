let form = document.getElementById('bamf-subscriptionForm');

let namefieldInput = document.getElementById("bamf-name");
let namefieldLabel;
let fieldsLabels = form.getElementsByTagName('label');

for (let element of fieldsLabels) {
	if (element.getAttribute('for')==namefieldInput.getAttribute('id')) {
		namefieldLabel = element;
		break;
	}
}
namefieldInput.addEventListener('focusin',(event) => {
	namefieldLabel.classList.add('bamf-label-up');
});


namefieldInput.addEventListener('focusout',(event) => {
	if (namefieldInput.value == '') {
		namefieldLabel.classList.remove('bamf-label-up');
	}
});
