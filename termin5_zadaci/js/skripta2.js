window.onload = function(){
    var podaci = window.location.search;
    var items = podaci.substring(1).split('&');
    var h1 = this.document.getElementById('welcome_user');
    var h4 = this.document.getElementById('premium_member');
    var sel1 = this.document.getElementById('sel1');
    var p = this.document.getElementById("paragraph");
    var submit = this.document.getElementById("submitbtn");

    var recnik ={};
    for(var i in items){
       var temp = items[i].split('=');
       recnik[temp[0]]=temp[1];
    }

    h1.innerText = "Hello, " + recnik.ime + " " + recnik.prezime;
    var klasaValue = '';

    switch(recnik.klasa){
        case "1":
            klasaValue = "Silver";
            break;
        case "2":
            klasaValue = "Gold";
            break;
        case "3":
            klasaValue = "Platinum";
            break;
    }

    if(klasaValue != ''){
        h4.innerText = "You are our premium member, with "+ klasaValue +" membership!";
    }

    function addDestinations() {
        sel1.options[sel1.options.length] = new Option(destinations[i].name, destinations[i].name);
    }

    if(recnik.status){
        var membership = klasaValue;
        for(var i in destinations){
            console.log(destinations[i]);
            console.log(destinations[i].type);
            
            if(membership == "Platinum" && destinations[i].type == "platinum"){
                addDestinations();
            }else if(destinations[i].type == "gold" && (membership == "Platinum" || membership == "Gold")){
                addDestinations();
            }else if(destinations[i].type == "silver" && (membership == "Platinum" || membership == "Gold" || membership == "Silver")){
                addDestinations();
            }else if(destinations[i].type == "ordinary"){
                addDestinations();
            }
            
        }
    } else {
        for(var i in destinations){
            if(destinations[i].type  == "ordinary"){
                addDestinations();
            }
        }
    }

    submit.addEventListener("click", function () {
        var destination = sel1.options[sel1.selectedIndex].value;
        for(var i in destinations){
            if(destination == destinations[i].name){
                p.innerHTML = "<br>Price for your selected destination is " + destinations[i].price +".";
            }
        }
    });
};