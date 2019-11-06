var upozorenje = {
	poruka: "Grad mora biti velikim slovima"
}

function proveraForme(forma) {
	let retVal = true;

	if(forma.ime.value.trim() == ''){
		retVal = false;
	}

	if(forma.prezime.value.trim() == ''){
		retVal = false;
	}

	if (forma.jmbg.value.trim() == '' || forma.jmbg.value.trim().length != 13) {
		retVal = false;
	}

	if (forma.grad.value.trim() == '' || forma.grad.value.trim().toUpperCase() != forma.grad.value.trim() ) {
		retVal = false;
		callAlterFunction(upozorenje, ispisiPoruku);
	}

	return retVal;
}

function callAlterFunction(parametar, callback) {
	callback(parametar);
}

function ispisiPoruku(par) {
	alert(par.poruka);
}

window.onload = function () {
	let jmbg = this.document.getElementById('jmbg');
	let jmbgLabel = this.document.getElementById('jmbg_label');
	let grad = this.document.getElementById('grad');
	let gradLabel = this.document.getElementById('grad_label');
	let submit = this.document.getElementById('submitBtn');

	jmbg.addEventListener('blur', () => {
		if (jmbg.value.trim() == '' || jmbg.value.trim().length != 13) {
			jmbgLabel.classList.add('redText');
			submit.disabled = true;
		}else {
			jmbgLabel.classList.remove('redText');
			submit.disabled = false;
		}
	})

	grad.addEventListener('blur', () => {
		if (grad.value.trim() == '' || grad.value.trim().toUpperCase() != grad.value.trim() ) {
			gradLabel.classList.add('redText');
		} else {
			gradLabel.classList.remove('redText');
		}
	})
}
