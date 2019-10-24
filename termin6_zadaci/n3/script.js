//Napisati funkciju klikniMe, funkcija klikniMe se poziva kao rezultat klika na dugme maloprodajni i dugme veleprodajni

//povezati onclick dogadjaj dugmica sa funkcijom klikniMe. Poziv funkcije klikni me se vrsi iz index.html stranice!

//Kao parametar funkcija klikniMe prima callback funkciju. Za klik na dugme maloprodajni prosledjeni funkcija bi trebala da bude
//funkcija proveraMaloprodaja iz prethodno napisanog modula. Za klik na dugme veleprodajni prosledjeni funkcija bi trebala da bude
//funkcija proveraVeleprodaja iz prethodno napisanog modula.

//Funkcija klikni me preuzima vrednost input polja sa id-jem kolicina, i proverava da li je unet broj. Ukoliko nije unet broj u 
//input polje u polje sa id-jem output upisati tekst: Uneli ste vrednost koja nije broj!
//Ukoliko je uneta vrednost broj, proveriti da li prosledjena callback funkcija vraca true i upisati u polje sa id-jem output
//tekst: Kupovina uspesna!
//Ukoliko callback funkcija vraca false, upisati u polje sa id-jem output tekst: Kupovina neuspesna!

const klikniMe = (callback) => {
    const kolicina = document.querySelector('#kolicina').value;
    const output = document.querySelector('#output');

    if(isNaN(kolicina)){
        output.innerText = "Uneli ste vrednost koja nije broj!";
        return;
    }
    if(callback(kolicina))
        return output.innerText = "Kupovina uspesna!";
    else 
        return output.innerText = "Kupovina neuspesna!";
    
};
