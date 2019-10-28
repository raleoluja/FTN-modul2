let studenti: Student[] = [];

class Predmet {
    constructor(public id: number, public naziv: string, public profesor: string, public ocena: number) { }
}

class Student {
	private _ime: string;
	private _prezime: string;
	private _fakultet: string;
	private _broj_indexa: string;
    private _prosecna_ocena: number;
    private _polozeni_predmeti: Predmet[];


	constructor(ime:string, prezime:string, fakultet:string, broj_indexa:string) {
        this._ime = ime;
        this._prezime = prezime;
        this._fakultet = fakultet;
        this._broj_indexa = broj_indexa;
        this._prosecna_ocena = 0;
        this._polozeni_predmeti = [];
    }
    
	public get ime(): string {
		return this._ime;
	}

	public set ime(value: string) {
		this._ime = value;
	}

	public get prezime(): string {
		return this._prezime;
	}

	public set prezime(value: string) {
		this._prezime = value;
	}

	public get fakultet(): string {
		return this._fakultet;
	}

	public set fakultet(value: string) {
		this._fakultet = value;
	}

	public get broj_indexa(): string {
		return this._broj_indexa;
	}

	public set broj_indexa(value: string) {
		this._broj_indexa = value;
	}

	public get prosecna_ocena(): number {
		return this._prosecna_ocena;
	}

	public set prosecna_ocena(value: number) {
		this._prosecna_ocena = value;
	}

	public get polozeni_predmeti(): Predmet[] {
		return this._polozeni_predmeti;
	}

	public set polozeni_predmeti(value: Predmet[]) {
        this._polozeni_predmeti = value;
        this.izracunajProsecnuOcenu();
	}
    public dodajPredmet(predmet: Predmet): void {
        this.polozeni_predmeti.push(predmet);
        this.izracunajProsecnuOcenu();
    }

    public izracunajProsecnuOcenu(): void {
        let sumaOcena: number = 0;
        for (let key in this._polozeni_predmeti) {
            sumaOcena += this._polozeni_predmeti[key].ocena;
        }
        this._prosecna_ocena = sumaOcena / this._polozeni_predmeti.length;
    }

    public predstaviSe(): string {
        return `Ja sam ${this._ime} ${this._prezime}, student ${this._fakultet}-a sa prosecnom ocenom ${this._prosecna_ocena}`;
    }

    public omiljeniProfesori(): string[] {
        let retVal: string[] = []
        for (let key in this._polozeni_predmeti) {
            if(this._polozeni_predmeti[key].ocena >= 11){
                retVal.push(this._polozeni_predmeti[key].profesor);
            }
        }

        return retVal;
    }

};

window.onload = function(){
    document.getElementsByTagName("form")[0].addEventListener("submit", function(ev){
        ev.preventDefault();
        
        let ime: string = (document.getElementById("ime")as HTMLInputElement).value;
        let prezime: string = this.prezime.value;
        let fakultet: string = this.fakultet.value;
        let indeks : string = this.indeks.value;
        let string_predmeta: string = this.predmeti.value;
        
        let s: Student = new Student(ime, prezime, fakultet, indeks);
        let predmeti: Predmet[] = [];

        let splitovano: string[] = string_predmeta.split(';');
        splitovano.forEach(element => {
            let podaci: string[] = element.split(',');
            let p: Predmet = new Predmet(Number(podaci[0]), podaci[1], podaci[2], Number(podaci[3]));
            predmeti.push(p);
        });

        s.polozeni_predmeti = predmeti;
        studenti.push(s);

        document.getElementById("tekst").innerHTML = s.predstaviSe();
    });

    document.getElementById('predstavi').addEventListener('click', function () {
        let divElement: HTMLDivElement = document.getElementById('tekst')as HTMLDivElement;
        divElement.innerHTML = "";

        studenti.forEach(element => {
            divElement.innerHTML += element.predstaviSe() + '<br>';
        });
        
    })

    document.getElementById('devetke').addEventListener('click', ()=> {
        let divElement: HTMLDivElement = document.getElementById('tekst')as HTMLDivElement;
        divElement.innerHTML = "";

        let devetkasi: Student[] = devetke(studenti);
        devetkasi.forEach(devetkas => {
            divElement.innerHTML += devetkas.predstaviSe() + '<br>';
        });
    })

    document.getElementById('omiljeni').addEventListener('click', ()=> {
        let divElement: HTMLDivElement = document.getElementById('tekst')as HTMLDivElement;
        divElement.innerHTML = "";

       studenti.forEach(student => {
           if(student.omiljeniProfesori().length > 0)
           divElement.innerHTML += student.ime + ' ' + student.prezime + ' Ima omiljene profesore: ' + student.omiljeniProfesori().join(', ') + '<br>';
       });
    })

}

function devetke(studenti: Student[]): Student[] {
    let returnNiz: Student[] = [];
    studenti.forEach(student => {
        let counter: number = 0;
        student.polozeni_predmeti.forEach(predmet => {
            if(predmet.ocena == 9)
            counter++;
        });
        if (counter >= 3) {
            returnNiz.push(student);
        }
    });

    return returnNiz;
}


let s1: Student = new Student("Pera", "Peric", "FTN", "PP-001");
let s1p1: Predmet = new Predmet(1, "Predmet 1", "Profesor Profesorevic", 9);
let s1p2: Predmet = new Predmet(2, "Predmet 2", "Nastavnik Nastavnikovic", 9);
let s1p3: Predmet = new Predmet(3, "Predmet 3", "Predavac Predavacevic", 9);
let s1p4: Predmet = new Predmet(4, "Predmet 4", "Doktor Doktorevic", 10);
s1.polozeni_predmeti = [s1p1, s1p2, s1p3, s1p4];

let s2: Student = new Student("Mika", "Mikic", "FTN", "MM-001");
let s2p1: Predmet = new Predmet(1, "Predmet 1", "Profesor Profesorevic", 11);
let s2p2: Predmet = new Predmet(2, "Predmet 2", "Nastavnik Nastavnikovic", 9);
let s2p4: Predmet = new Predmet(4, "Predmet 4", "Doktor Doktorevic", 11);
s2.polozeni_predmeti = [s2p1, s2p2, s2p4];

let s3: Student = new Student("Ana", "Anaic", "FTN", "AA-001");
let s3p1: Predmet = new Predmet(1, "Predmet 1", "Profesor Profesorevic", 11);
let s3p2: Predmet = new Predmet(2, "Predmet 2", "Nastavnik Nastavnikovic", 10);
s3.dodajPredmet(s3p1);
s3.dodajPredmet(s3p2);

studenti.push(s1, s2, s3);

console.log(s1.predstaviSe());
console.log(s2.predstaviSe());
console.log(s2.omiljeniProfesori());
