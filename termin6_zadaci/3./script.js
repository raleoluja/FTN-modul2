let niz = ['Pera', 'Mika', 'Laza'];

niz.forEach((name, index) => {
    console.log(index + 1 + '. ' + name);
    
});

let str = '';

niz.forEach((name, index) => {
    str += (index + 1 + '. ' + name + '\n');
    
});
alert(str);