function generickaCestitka(person, event) {
    document.write("Happy " + event + " to you.<br>");
    document.write("Happy " + event + " to you.<br>");
    document.write("Happy " + event + " dear " + person + ".<br>");
    document.write("Happy " + event + " to you.<br><br>");
};

function greeter(text, callback) {
    let p = text.split(',');
    let ime = p[0];
    let event = p[1];

    if(typeof(callback) === "function"){
        callback(ime, event);
    }
}

generickaCestitka("Djole", "rodjendan");
greeter("pera,birthday",generickaCestitka);

function generickaCestitkaKonzola(person, event) {
    console.log("Happy " + event + " to you.<br>");
    console.log("Happy " + event + " to you.<br>");
    console.log("Happy " + event + " dear " + person + ".<br>");
    console.log("Happy " + event + " to you.<br>");
};

generickaCestitkaKonzola("Mika", "rodjendan");