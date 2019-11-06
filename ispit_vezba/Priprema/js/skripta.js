var upozorenje = {
	crveno: ["Prokupac", "Cabernet Sauvignon"],
	belo: "Sauvignon blanc"
};

var vina = [{naziv: "Svb Rosa", drzava: "Srbija"}, {naziv: "Port", drzava: "Portugal"}, 
					{naziv: "Dom", drzava:"Francuska"}];

var boja = {
	plava: "blue",
	crvena: "red"
};

function validacijaForme(forma) {
	var valRet = true;

	if(forma.naziv.value.trim() == ''){
		valRet = false;
	}

	if(forma.drzava.value.trim() == ''){
		valRet = false;
	}

	if (forma.cena.value.trim() == '' || forma.cena.value.trim() < 0) {
		valRet = false;
	}

	if (forma.varijanta.value.trim() == '') {
		valRet = false;
	}

	if (forma.sorta.value == 'Prazno') {
		valRet = false;
	}

	if ((forma.varijanta.value == 'belo' && forma.sorta.value != 'Sauvignon blanc') || (forma.varijanta.value == 'crveno' && forma.sorta.value == 'Sauvignon blanc')) {
		valRet = false;
	}

	var pronasaoVinoIzNiza = false;
	for(var i = 0; i < vina.length; i++){
		if(forma.naziv.value.trim() == vina[i].naziv && forma.drzava.value.trim() == vina[i].drzava){
			pronasaoVinoIzNiza = true;
		}
	}

	if (pronasaoVinoIzNiza == false) {
		valRet = false;
	}

	return valRet;
}

function promenaVarijante(select){
	var span = document.getElementById('span');

	if (select.value == 'crveno') {
		span.innerHTML = upozorenje[select.value].join(', ');
	} else {
		span.innerHTML = upozorenje[select.value];
	}
}