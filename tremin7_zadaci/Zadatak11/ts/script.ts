class Namestaj{
    protected _sifra: number;
	protected _naziv: string;
	protected _jedinicnaCena: number;
    protected _kolicinaUMagacinu: number;
    

	constructor(sifra: number, naziv: string, jedinicnaCena: number, kolicinaUMagacinu: number) {
		this._sifra = sifra;
		this._naziv = naziv;
		this._jedinicnaCena = jedinicnaCena;
		this._kolicinaUMagacinu = kolicinaUMagacinu;
	}


	public get sifra(): number {
		return this._sifra;
	}

	public get naziv(): string {
		return this._naziv;
	}

	public get jedinicnaCena(): number {
		return this._jedinicnaCena;
	}

	public get kolicinaUMagacinu(): number {
		return this._kolicinaUMagacinu;
	}

	public set sifra(value: number) {
		this._sifra = value;
	}

	public set naziv(value: string) {
		this._naziv = value;
	}

	public set jedinicnaCena(value: number) {
		this._jedinicnaCena = value;
	}

	public set kolicinaUMagacinu(value: number) {
		this._kolicinaUMagacinu = value;
	}

}

class Salon{
    private _naziv: string;
	private _adresa: string;
	private _telefon: string;
    private _namestaji: Namestaj[];
    

	constructor(naziv: string, adresa: string, telefon: string) {
		this._naziv = naziv;
		this._adresa = adresa;
		this._telefon = telefon;
		this._namestaji = [];
	}

	public get naziv(): string {
		return this._naziv;
	}

	public get adresa(): string {
		return this._adresa;
	}

	public get telefon(): string {
		return this._telefon;
	}

	public get namestaji(): Namestaj[] {
		return this._namestaji;
	}

	public set naziv(value: string) {
		this._naziv = value;
	}

	public set adresa(value: string) {
		this._adresa = value;
	}

	public set telefon(value: string) {
		this._telefon = value;
	}

	public set namestaji(value: Namestaj[]) {
		this._namestaji = value;
    }
    
    public ispisiNamestajNaStanju(): void{
        this.namestaji.forEach((komad, index) => {
            if(komad.kolicinaUMagacinu > 0){
                console.log(`${index + 1 }. sifra: ${komad.sifra} naziv proizvoda: ${komad.naziv} komada: ${komad.kolicinaUMagacinu} cene: ${komad.jedinicnaCena}`);   
            }
        });
        console.log(" ");
    }

    public dodajNaLager(sifra: number, kolicina: number): void{
        this.namestaji.forEach(komad => {
            if(komad.sifra == sifra){
                komad.kolicinaUMagacinu += kolicina;
            }
        });
    }

    public dodajNamestaj(namestaj: Namestaj): void{
        for(let komad of this.namestaji){
            if(komad.sifra == namestaj.sifra){
                console.log(`Greska!!! Vec postoji namestaj sa tom siform!`);
                return;
            } 
        };
        this._namestaji.push(namestaj);
        
    }

    public prodajKomad(sifra: number, kolicina: number): void{
        for(let komad of this.namestaji) {
            if(komad.sifra == sifra){
                if(komad.kolicinaUMagacinu < kolicina){
                    console.log(`Kupovina nije uspesna! Na stanju nema dovoljno zeljenog proizvoda!`);
                    return;
                }else{
                    console.log(`Uspesno ste kupili ${kolicina} namestaja ${komad.sifra} Komoda za ${komad.jedinicnaCena * kolicina} !`);
                    komad.kolicinaUMagacinu -= kolicina;
                    return;
                }
            }else
            console.log(`Zelejni komad namestaja trenutno nije na stanju.`);
            
        };
        console.log("Ne postoji namestaj sa tom sifrom!");
    }
	
}

let n1: Namestaj = new Namestaj(111, "Ester Komoda", 50386.50, 15);
let n2: Namestaj = new Namestaj(123, "Rita Lezaj", 41127.12, 5);
let n3: Namestaj = new Namestaj(143, "Fiona Lezaj", 41127.12, 0);
let n4: Namestaj = new Namestaj(144, "Kloe Klub Sto", 20241, 2);

let s: Salon = new Salon("Simpo", "Bulevar Oslobodjenja BB", "021/000111");
s.namestaji = [n1, n2, n3, n4];
s.ispisiNamestajNaStanju();

s.dodajNaLager(3, 144);

s.ispisiNamestajNaStanju();

let n5: Namestaj = new Namestaj(254, "Fira Klub Sto", 30360.83, 11);
s.dodajNamestaj(n5);

n5.sifra = 5;
s.dodajNamestaj(n5);

s.prodajKomad(111, 20);

s.prodajKomad(111, 11);
s.ispisiNamestajNaStanju();
