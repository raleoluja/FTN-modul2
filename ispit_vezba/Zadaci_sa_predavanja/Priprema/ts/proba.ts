let studenti: Student[] = [];
let aktivanStudent: Student = null;


function promeniAktivnog(selekt: HTMLSelectElement){
   let jmbg: number = Number(selekt.value);
   aktivanStudent = studenti.filter(el => el.jmbg == jmbg)[0];
   aktivanStudent.refreshPredmeti();
}

class Predmet{
    private _naziv: string;
    private _ocena: number;


	constructor(naziv: string, ocena: number) {
		this._naziv = naziv;
		this._ocena = ocena;
	}

	public get naziv(): string {
		return this._naziv;
	}

	public get ocena(): number {
		return this._ocena;
	}

	public set naziv(value: string) {
		this._naziv = value;
	}

	public set ocena(value: number) {
		this._ocena = value;
	}

}

class Student{
    private _ime: string;
    private _prezime: string;
    private _jmbg: number;
    private _predmeti: Predmet[];


	constructor(ime: string, prezime: string, jmbg: number) {
		this._ime = ime;
		this._prezime = prezime;
		this._jmbg = jmbg;
		this._predmeti = [];
    }
    
	public get ime(): string {
		return this._ime;
	}

	public get prezime(): string {
		return this._prezime;
	}

	public get jmbg(): number {
		return this._jmbg;
	}

	public get predmeti(): Predmet[] {
		return this._predmeti;
	}

	public set ime(value: string) {
		this._ime = value;
	}

	public set prezime(value: string) {
		this._prezime = value;
	}

	public set jmbg(value: number) {
		this._jmbg = value;
	}

    public dodajPredmet(predmet: Predmet): void{
        this._predmeti.push(predmet);
        this.refreshPredmeti();
    }

    public refreshPredmeti(): void{
        let predDiv: HTMLDivElement = document.getElementById('predmeti')as HTMLDivElement;

        // varijanta sa tabelom
        // predDiv.innerHTML = "<ul class='list-group'>";

        // for(let i = 0; i < this._predmeti.length; i++){
        //     let li_naziv = "<li class='list-group-item'>Predmet: " + this._predmeti[i].naziv + "</li>";
        //     let li_ocena = "<li class='list-group-item'>Ocena: " + this._predmeti[i].ocena + "</li>";
        //     predDiv.innerHTML += li_naziv;
        //     predDiv.innerHTML += li_ocena;
        // }

        // predDiv.innerHTML += "</ul><br/>";       

    

        let outStr: string = '';
        for (let index = 0; index < this._predmeti.length; index++) {
            outStr += 'Predmet: ' + this._predmeti[index].naziv + '<br>' + 'Ocena: ' + this._predmeti[index].ocena + '<br>'
            
        }
        predDiv.innerHTML = outStr;
    }

    public getProsek(): Number{
        let prosOcen = this._predmeti.reduce((pr, el, index, arr) => {
            return pr + (el.ocena / arr.length);
        }, 0);
        return prosOcen;
    }

    
}

function wireEvents(){
    let btnDodaj = document.getElementById('dodajPredmet');
    let btnProsecnaOcena = document.getElementById('izracunajProsecnuOcenu');

    btnDodaj.addEventListener('click', ()=>{
        let naziv: string = (document.getElementById('naziv')as HTMLInputElement).value;
        let ocena: number = Number((document.getElementById('ocena')as HTMLInputElement).value);
        let predmet: Predmet = new Predmet(naziv, ocena);
        aktivanStudent.dodajPredmet(predmet);

    });

    btnProsecnaOcena.addEventListener('click', ()=>{
        let prosecnaOcenaDiv: HTMLDivElement = document.getElementById('prosecnaOcena')as HTMLDivElement;
        prosecnaOcenaDiv.innerHTML = 'Prosecna ocena za studenta: ' + aktivanStudent.ime + ' ' + aktivanStudent.prezime +' je ' + aktivanStudent.getProsek();
    });

}













//OVAJ KOD OSTAVITI NA DNU FAJLA
window.onload = function() {
    initStudenti.forEach((elem) => {
        let s: Student = new Student(elem.ime, elem.prezime, Number(elem.jmbg));
        elem.predmeti.forEach((elem)=>{
            let p: Predmet = new Predmet(elem.naziv, elem.ocena);
            s.dodajPredmet(p);
        });
        studenti.push(s);
        if(aktivanStudent == null){
            aktivanStudent = s;
        }
    });
    if(QueryString["ime"] != null){
        var student = new Student(QueryString["ime"], QueryString["prezime"], Number(QueryString["jmbg"]));
        studenti.push(student);    
    }
    let selekt: HTMLElement = document.getElementById("student");
    let output: string = "";
    for(let i = 0; i < studenti.length; i++){
        let optionElem = `<option value=${studenti[i].jmbg}>${studenti[i].ime} ${studenti[i].prezime}</option>`;
        output += optionElem;         
    }
    selekt.innerHTML = output;
    aktivanStudent.refreshPredmeti();
    wireEvents();
}

var initStudenti = [
    {
        ime: "Pera",
        prezime: "Peric",
        jmbg: "1123456789000",
        predmeti: [
            {
                naziv: "Predmet1",
                ocena: 10
            },
            {
                naziv: "Predmet2",
                ocena: 8
            },
            {
                naziv: "Predmet3",
                ocena: 9
            },
            {
                naziv: "Predmet4",
                ocena: 9
            }
        ]
    },
    {
        ime: "Mika",
        prezime: "Mikic",
        jmbg: "1123456789001",
        predmeti: [
            {
                naziv: "Predmet1",
                ocena: 7
            },
            {
                naziv: "Predmet2",
                ocena: 10
            },
            {
                naziv: "Predmet3",
                ocena: 8
            }
        ]
    }
]

var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
    return query_string;
}();

