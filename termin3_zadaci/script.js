var zbr = 0;

function brojac() {
    zbr++;
    console.log('\n' + '-------------------------------------------------------' + '\n' + 'zadatak ' + zbr + '\n' + '-------------------------------------------------------');
}

//zadatak1
brojac();

var str = "Pera|Peric"
var str2 = "Milan|Mikic"
var korisnici = [];

function obradi(par) {
    var niz = par.split("|");
    korisnici.push(niz);
    console.log("Korisnicko ime je: " + niz[0] + "\n" + "Lozinka je: " + niz[1]); 
}

obradi(str2);

//zadatak2
brojac();

var str1 = "drvo";
var str2 = "prolece";

function obradiString(str1, str2) {
    var str1PrvaTri = str1.slice(0,3);
    var str1Konacni = str1PrvaTri.concat(str1PrvaTri);
    var str2PoslednjaTri = str2.slice(-3);
    var rezultatSpajanja = str1Konacni.concat(str2PoslednjaTri);
    
    console.log(rezultatSpajanja);
    
}

obradiString(str1, str2);

//zadatak3
brojac();

var fraza = "random access memory";

function akronim(ulaz) {
    var nizFraza = fraza.split(" ");
    var akr = "";
    var prvoSlovo = "";
    for(var i in nizFraza){
        prvoSlovo = nizFraza[i].charAt(0).toUpperCase();
        akr += prvoSlovo;
    }

    console.log(akr);
    
}

akronim(fraza);

//zadatak4
brojac();

var ocene = [8, 7, 6, 9, 8, 10, 8];
var ime_prez = ["Marko", "Markovic"];

function izracunajProsek(ocene, ime) {
    var sum = 0;
    for(var i in ocene){
        sum += ocene[i];
    }

    var prosek = sum / ocene.length;
    console.log("Student " + ime + " ima prosek ocena: " + prosek);
   
}

izracunajProsek(ocene, ime_prez);

//zadatak5
brojac();

var drzave = { 1 : "RS" , 2 : "RU" , 3 : "UK", 4 : "ESP" };
var gradovi = [ ["London", 3], ["Novi Sad", 1], ["Moskva", 2], ["Madrid", 4]];

function spoj(drzave, gradovi) {
    var sopjenNiz = [];
    for(var i in gradovi){
       console.log(gradovi[i][0] + " - " + drzave[gradovi[i][1]]);
       
    }
    
}

spoj(drzave, gradovi);

//zadatak6
brojac();

var niz = ["markec|admin", "godzz|webmaster", "nikola123|admin", "nennad|moderator"];

function prepakujNiz(niz) {
    var pomocni = [];
    var noviNiz = [];
    for(var i in niz){
        pomocni = niz[i].split("|");
        if(!noviNiz.includes(pomocni[1])){
            noviNiz.push(pomocni[1]);
        }
        
    }

    console.log(noviNiz);
    
}

prepakujNiz(niz);

//zadatak7
brojac();

var korisnici = ["marko:17", "nikola:28", "pera:23", "nenad:15"];

function ispitajPunoletnost(korisnici) {
    var rastavljen = [];
    
    for(var i in korisnici){
        var uslov = "da";
        rastavljen = korisnici[i].split(":");
        if(rastavljen[1] < 18){
            uslov = "ne";
        }
        console.log(rastavljen[0] + " - " + uslov);
        
    }
}

ispitajPunoletnost(korisnici);