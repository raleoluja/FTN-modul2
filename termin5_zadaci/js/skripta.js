window.onload = function(){
    var ime = document.getElementById("usr");
    var prezime = document.getElementById("prz");
    var forma = document.getElementById("forma");
    var premium = document.getElementById("premium");
    var membership = document.getElementById("sel1");
    var submit = this.document.getElementById("submitbtn");
    
    premium.addEventListener("change" , function () {
        if(premium.checked){
            membership.disabled = false;
            submit.style.backgroundColor = "silver";
            membership.addEventListener("change", function () {
                switch(membership.value){
                    case "1":
                        submit.style.backgroundColor = "silver";
                        break;
                    case "2":
                        submit.style.backgroundColor = "gold";
                        break;
                    case "3":
                        submit.style.backgroundColor = "skyblue";
                        break;
                }
            });
        }
        else if(!premium.checked){
            membership.disabled = true;
            submit.style.backgroundColor = "white";
        }
    });

    forma.onsubmit = function () {
        if(ime.value == ""){
            alert("Morate uneti ime!");
            ime.focus();
            return false;
        }
        if(prezime.value == ""){
            alert("Morate uneti prezime!");
            prezime.focus();
            return false;
        }
        if(ime.value[0] != ime.value[0].toUpperCase()){
            alert("Ime mora poceti velikim slovom!");
            return false;
        }
        if(prezime.value[0] != prezime.value[0].toUpperCase()){
            alert("Prezime mora poceti velikim slovom");
            return false;
        }else return true;
    };
};