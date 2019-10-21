var search = window.location.search;

var tabela = document.getElementById("tabela");
var items = search.substring(1).split('&');
console.log(items);
console.log('---------------------------------------------');

var ime = '';
var prezime = '';
var jmbg = '';

for(var i in items){
    var values = items[i].split('=');
    console.log(values);
    
    if(values[0] == 'ime'){
        ime = values[1];
    } else if (values[0] == "prezime"){
        prezime = values[1];
    } else if(values[0] == 'jmbg'){
        jmbg = values[1];
    }
}

var row = tabela.insertRow(-1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);

var newIme = document.createTextNode(ime);
cell1.appendChild(newIme);
var newPrezime = document.createTextNode(prezime);
cell2.appendChild(newPrezime);
var newJmbg = document.createTextNode(jmbg);
cell3.appendChild(newJmbg);