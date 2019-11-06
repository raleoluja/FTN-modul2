var k: any;
let vinoteke: Vinoteka[] = [];
let aktivnaVinoteka: Vinoteka = null;


function promeniAktivnu(selekt: HTMLSelectElement){
    aktivnaVinoteka = vinoteke.filter((elem) => elem.id == Number(selekt.value))[0]; 
    refreshIspis();
}

class Vino{
    public naziv: string;
    public cena: number;
    public varijanta: string;
    

	constructor(naziv: string, cena: number, varijanta: string) {
		this.naziv = naziv;
		this.cena = cena;
		this.varijanta = varijanta;
	}

}


class Vinoteka{
    private _id: number;
	private _naziv: string;
    private _vina: Vino[];
    

	constructor(id: number, naziv: string) {
		this._id = id;
		this._naziv = naziv;
		this._vina = [];
    }
    
	public get id(): number {
		return this._id;
	}

	public get naziv(): string {
		return this._naziv;
	}

	public get vina(): Vino[] {
		return this._vina;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set naziv(value: string) {
		this._naziv = value;
    }
    
    public dodajVino(vino:Vino):void  {
        this._vina.push(vino);
    }

    getNajskuplje(): Vino{
        return this._vina.reduce((pr, nex)=>{
            if(pr.cena > nex.cena){
                return pr;
            }else{
                return nex;
            }
        });
    }

    getNajjeftinije(): Vino{
        return this._vina.reduce(( pr, next)=>{
            if(pr.cena < next.cena)
                return pr;
            else
                return next;
        });
    }

    public najzastupljenijaVarijanta(): void{
        let varijanteDiv: HTMLDivElement = document.getElementById('varijante')as HTMLDivElement;
        
        let crno: Vino[] = this._vina.filter( el => el.varijanta == 'Crno');
        let belo: Vino[] = this._vina.filter( el => el.varijanta == 'Belo');
        let rose: Vino[] = this._vina.filter( el => el.varijanta == 'Rose');
        let najzastupljenije: Vino[] = [];
        
        if(crno.length >= belo.length && crno.length >= rose.length){
            najzastupljenije = crno;
        } else if( belo.length >= rose.length){
            najzastupljenije = belo;
        } else {
            najzastupljenije = rose;
        }

        if (najzastupljenije.length == 0) {
            varijanteDiv.innerHTML = `<h3>Vinoteka ${aktivnaVinoteka.naziv} jos uvek nema vina za prodaju!!<h3>`;
        } else{
            varijanteDiv.innerHTML = `<h3>Najzastupljenija varijanta za vinoteku ${aktivnaVinoteka.naziv} je: <br/> ${najzastupljenije[0].varijanta} sa ukupno kupljenih ${najzastupljenije.length} vina.</h3>`;
        }

    }

    public najskupljaVarijanta(): void {
        let varijanteDiv: HTMLDivElement = document.getElementById('varijante')as HTMLDivElement;

        let crno: Vino[] = this._vina.filter( el => el.varijanta == 'Crno');
        let belo: Vino[] = this._vina.filter( el => el.varijanta == 'Belo');
        let rose: Vino[] = this._vina.filter( el => el.varijanta == 'Rose');
        let najskuplje: Vino[] = [];

        if(crno.reduce((pr, el) => pr + el.cena, 0) >= belo.reduce((pr, el)=> pr + el.cena, 0) && crno.reduce((pr, el) => pr + el.cena, 0) >= rose.reduce((pr, el)=> pr + el.cena, 0)){
            najskuplje = crno;
        } else if ( belo.reduce((pr, el)=> pr + el.cena, 0) >= rose.reduce((pr, el)=> pr + el.cena, 0)){
            najskuplje = belo;
        }else{
            najskuplje = rose;
        }

        let prosecnaCena = najskuplje.reduce((pr, el, i, arr)=> pr + el.cena/arr.length, 0);

        if(najskuplje.length == 0){
            varijanteDiv.innerHTML = `<h3>Vinoteka ${aktivnaVinoteka.naziv} jos uvek nema vina za prodaju!!<h3>`;
        }else{
        varijanteDiv.innerHTML = `<h3>Najskuplja varijanta u vinoteci ${aktivnaVinoteka.naziv} je: <br/> ${najskuplje[0].varijanta} sa prosecnom cenom po vinu: ${prosecnaCena}.</h3>;`
        }
    }

}

//TODO Implementirati metodu za ispis podataka na sledeci nacin:
/*
    U div#vina upisati ul listu sa sledecim formatom:
    <ul class="list-group">
        <li class="list-group-item"> 
            nazivVina (varijantaVina) 
            <span class="badge">cenaVina</span>
        </li>
        <li class="list-group-item"> 
            ...
        </li>
        ...
    </ul>
    //Ponoviti li sa svako vino u nizu vina aktivne vinoteke
*/

function refreshIspis(): void {
   let divVina = document.getElementById('vina');

   let output: string = `<ul class="list-group">`;

   
   for (let i = 0; i < aktivnaVinoteka.vina.length; i++) {
       let klasa ='';
       if (aktivnaVinoteka.vina.length > 0 && aktivnaVinoteka.vina[i].naziv == aktivnaVinoteka.getNajskuplje().naziv) {
           klasa = 'list-group-item-danger';
       }
       if (aktivnaVinoteka.vina.length > 0 && aktivnaVinoteka.vina[i].naziv == aktivnaVinoteka.getNajjeftinije().naziv) {
           klasa = 'list-group-item-success';
       }

       output += `<li class="list-group-item ${klasa}"> ${aktivnaVinoteka.vina[i].naziv} (${aktivnaVinoteka.vina[i].varijanta}) <span class="badge">${aktivnaVinoteka.vina[i].cena}</span></li>`
       
   }
   output += `</ul>`;

   divVina.innerHTML = output;
}

function wireEvents(): void {
    let buttonDodaj: HTMLInputElement = document.getElementById('dodajVino')as HTMLInputElement;
    let btnNajzastupljenija: HTMLInputElement = document.getElementById('najzastupljenijaVarijanta')as HTMLInputElement;
    let btnNajskuplja: HTMLInputElement = document.getElementById('najskupljaVarijanta')as HTMLInputElement;

    buttonDodaj.addEventListener('click', ()=>{
        let naziv: HTMLInputElement = document.getElementById('naziv')as HTMLInputElement;
        let varijanta: HTMLSelectElement = document.getElementById('varijanta')as HTMLSelectElement;
        let cena: HTMLInputElement = document.getElementById('cena')as HTMLInputElement;

        let v: Vino = new Vino(naziv.value, Number(cena.value), varijanta.value);
        aktivnaVinoteka.dodajVino(v);
        refreshIspis();
    });

    btnNajzastupljenija.addEventListener('click', ()=>{
        aktivnaVinoteka.najzastupljenijaVarijanta();
    });

    btnNajskuplja.addEventListener('click', ()=>{
        aktivnaVinoteka.najskupljaVarijanta();
    })

}


window.onload = function() {
    k.forEach((elem) => {
        let s: Vinoteka = new Vinoteka(Number(elem.id), elem.naziv);
        elem.vina.forEach((elem) => {
            let p: Vino = new Vino(elem.naziv, Number(elem.cena), elem.varijanta);
            s.dodajVino(p);
        });
        vinoteke.push(s);
        if(aktivnaVinoteka == null){
            aktivnaVinoteka = s;
        }
    });
 
    let selekt: HTMLElement = document.getElementById("vinoteka");
    let output: string = "";
    for(let i = 0; i < vinoteke.length; i++){
        let optionElem = `<option value=${vinoteke[i].id}>${vinoteke[i].naziv}</option>`;
        output += optionElem;         
    }
    selekt.innerHTML = output;
    refreshIspis();
    wireEvents();
}
