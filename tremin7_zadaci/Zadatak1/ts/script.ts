function hello(name: string, lastname:  string, gender: string): void {
    let titula: string = "";
    if(gender.toLowerCase() === "man"){
        titula = "Mr."; 
    }else if(gender.toLowerCase() === "woman"){
        titula = "Ms.";
    }
    document.write("Hello, " + titula + " " + name + " " + lastname + "<br>");
}

hello('Pera', 'Peric', 'man');

function sayHello(fullname: string, gender: string, helloFunction: (n:string, l: string, g:string)=>void) {
    let fn = fullname.split(" ");
    let name = fn[0];
    let lastname = fn[1];

    helloFunction(name, lastname, gender);
};

sayHello("John Smith", 'man', hello);