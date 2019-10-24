const deljivoSaTri = broj => {
    if(broj % 3 == 0){
        return true;
    } else {
        return false;
    }
};

const paranPozitivanBroj = broj =>{
    if( broj > 0 && broj % 2 == 0){
        return true;
    }else{
        return false;
    }
};

let n = [-21, -17, -3, -1, 2, 3, 5, 8, 9, 12, 14, 15];

const filter = (niz, callback) => {
    konacniNiz = [];
    for(item of niz){
        if(callback(item)){
            konacniNiz.push(item);
        }
    }
    return konacniNiz;
    
};

console.log("Originalni niz: " + n);
console.log("Filter i deljiviSaTri: " + filter(n, deljivoSaTri));
console.log("Filter i paranPozitivanBroj: " + filter(n, paranPozitivanBroj));
