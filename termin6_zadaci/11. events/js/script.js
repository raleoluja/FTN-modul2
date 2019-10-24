window.onload = () => {
    const kockica = document.getElementById("kockica");
    const body = document.getElementsByTagName("body")[0];
    const labela = document.getElementById("dynamicLabel");
    
    kockica.addEventListener('click', () => {
        labela.innerText = "click";
        if(kockica.style.backgroundColor == "orange"){
            kockica.style.backgroundColor = "";
        } else {
            kockica.style.backgroundColor = "orange";
        }
    });

    kockica.addEventListener('mouseenter', () => {
        labela.innerText = "mouseenter";
        kockica.style.backgroundColor = 'green';
    });

    kockica.addEventListener('mouseleave', () => {
        labela.innerText = "mouseleave";
        kockica.style.backgroundColor = '';
    });
}