function validiraj(forma: HTMLFormElement): boolean {
	let ime: string = (forma.ime as HTMLInputElement).value;
	let prezime: string = (forma.lozinka as HTMLInputElement).value;
	if(ime == "pera" && prezime == "peric"){
		return true;
	}else if(ime == "mika" && prezime == "mikic"){
		return true;
	}
	document.getElementById("poruka").innerText = "Neispravno korisnicko ime i/ili lozinka";
	return false;
}

