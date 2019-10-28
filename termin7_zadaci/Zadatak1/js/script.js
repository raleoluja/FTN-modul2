function hello(name, lastname, gender) {
    var titula = "";
    if (gender.toLowerCase() === "man") {
        titula = "Mr.";
    }
    else if (gender.toLowerCase() === "woman") {
        titula = "Ms.";
    }
    document.write("Hello, " + titula + " " + name + " " + lastname + "<br>");
}
hello('Pera', 'Peric', 'man');
function sayHello(fullname, gender, helloFunction) {
    var fn = fullname.split(" ");
    var name = fn[0];
    var lastname = fn[1];
    helloFunction(name, lastname, gender);
}
;
sayHello("John Smith", 'man', hello);
//# sourceMappingURL=script.js.map