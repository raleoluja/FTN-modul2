function hello(name, lastname, gender) {
    let titula = "";
    if(gender.toLowerCase() === "man"){
        titula = "Mr."; 
    }else if(pol.toLowerCase() === "woman"){
        titula = "Ms.";
    }
    document.write("Hello, " + titula + " " + name + " " + lastname + "<br>");
}

hello('Pera', 'Peric', 'man');

function sayHello(fullname, gender, helloFunction) {
    let fn = fullname.split(" ");
    let name = fn[0];
    let lastname = fn[1];

    helloFunction(name, lastname, gender);
};

sayHello("John Smith", 'man', hello);