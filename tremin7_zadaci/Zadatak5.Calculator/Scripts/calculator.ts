window.onload = function () {
    var calc = new Calculator('X','Y','Output');
};

class Calculator {
    private x : HTMLInputElement;
    private y : HTMLInputElement;
    private output : HTMLSpanElement;

    constructor(xId: string, yId: string, outputId: string) {
        //TODO 2 Konstruktor dobija ID elemenata koje su mu potrebni za rad
        //       Selektovati te elemente 
        this.x = document.getElementById(xId) as HTMLInputElement;
        this.y = document.getElementById(yId) as HTMLInputElement;
        this.output = document.getElementById(outputId) as HTMLDivElement;
        
        //TODO 3 Nakon inicijalizacije elemenata pozvati metodu wireEvents

        this.wireEvents();
        
    }

    wireEvents() {
      //TODO 4 Metoda wire events povezuje event listnere za klik na dugmice add, subtract... 
      //       I implementira njihovu funkcionalnost
      document.getElementById('Add').addEventListener('click', ()=>{
        let xBr = Number(this.x.value);
        let yBr = Number(this.y.value);
        let sum = this.add(xBr, yBr);
        this.output.innerText = sum.toFixed(2);
      });

      document.getElementById('Subtract').addEventListener('click', ()=>{
        let xBr = Number(this.x.value);
        let yBr = Number(this.y.value);
        let sub = this.subtract(xBr, yBr);
        this.output.innerText = sub.toFixed(2);
      })
      document.getElementById('Multiply').addEventListener('click', ()=>{
        let xBr = Number(this.x.value);
        let yBr = Number(this.y.value);
        let mu = this.multiply(xBr, yBr);
        this.output.innerText = mu.toFixed(2);
      })
      document.getElementById('Divide').addEventListener('click', ()=>{
        let xBr = Number(this.x.value);
        let yBr = Number(this.y.value);
        let div = this.divide(xBr, yBr);
        this.output.innerText = div.toFixed(2);
      })
     

    }

    //TODO 1 Implementirati metode za sabiranje, oduzimanje, mnozenje i deljenje
    public add(x:number, y:number){
        return x + y;
    }
    public subtract(x: number, y: number){
        return x - y;
    }
    public multiply(x: number, y: number){
        return x * y;
    }
    public divide(x: number, y: number){
        return x / y;
    }
    
}



