let niz1 = ['Pera', 'Djura', 'Milka'];
let niz2 = ['Peric', 'Djuric', 'Mikic'];

function loguj(imena, prezimena, logger) {
    let output = '';
    imena.forEach((ime, index) => {
        prezimena.forEach((prezime, ind) =>{
            if(index === ind){
                output += (index + 1 + ". "  + ime + " " + prezime + '\n');
                
            }
        });
    });
    logger(output);
}


loguj(niz1, niz2, console.log);