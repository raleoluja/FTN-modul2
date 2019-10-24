//zadatak9
let niz = [1, 2, 3, 4, 5];

function kvadratniKoren(n, logg) {
    n.forEach(element => {
        logg(Math.sqrt(element));
    });
}

kvadratniKoren(niz, console.log);

//zadatak10
let niz2 = [2, 3, 4, 5, 6];

function stepenovanje(nizBr, nizSt, logg) {
    nizBr.forEach((element,index) => {
        logg(Math.pow(element, nizSt[index]));
    });
}

stepenovanje(niz, niz2, console.log);