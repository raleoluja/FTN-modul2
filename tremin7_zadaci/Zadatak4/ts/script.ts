class Pas{
    private _ime: string;
    private _starost: number;
    private _rasa: string;
    private _vakcinisan: boolean;


	constructor(ime: string, starost: number, rasa: string, vakcinisan: boolean) {
		this._ime = ime;
		this._starost = starost;
		this._rasa = rasa;
		this._vakcinisan = vakcinisan;
    }

	public get ime(): string {
		return this._ime;
	}


	public set ime(value: string) {
		this._ime = value;
    }


	public get starost(): number {
		return this._starost;
	}

	public set starost(value: number) {
		this._starost = value;
	}

	public get rasa(): string {
		return this._rasa;
	}

	public set rasa(value: string) {
		this._rasa = value;
	}

	public get vakcinisan(): boolean {
		return this._vakcinisan;
	}

	public set vakcinisan(value: boolean) {
		this._vakcinisan = value;
	}
    
    public vaksinisiPsa(): void{
        this._vakcinisan = true;
    }
    public starostULjudskimGodinama(): number{
        return this._starost * 7;
    }

    public ispisPodatakaPas(): void{
        console.log(`Ime psa: ${this._ime}, starost: ${this._starost}, rasa: ${this._rasa}, vakcinisanost: ${(this._vakcinisan)? 'DA' : 'NE'}`);
        
    }

}

class Kennel{
    private _naziv: string;
    private _adresa: string;
    private _psi: Pas[];


	constructor(n: string, a: string) {
        this._naziv = n;
        this._adresa = a;
        this._psi = [];
    }
   
	public get naziv(): string {
		return this._naziv;
	}

	public set naziv(value: string) {
		this._naziv = value;
	}

	public get adresa(): string {
		return this._adresa;
	}

	public set adresa(value: string) {
		this._adresa = value;
	}

	public get psi(): Pas[] {
		return this._psi;
	}

	public set psi(value: Pas[]) {
		this._psi = value;
	}

    public dodajPsa(valu: Pas):void {
        this._psi.push(valu);
    }

    public pronadjiNajstarijeg(): Pas{
        if(this._psi.length > 0){
            let najstariji = this._psi[0];
            for(let i = 1; i < this._psi.length; i++){
                if(najstariji.starost < this._psi[i].starost){
                    najstariji = this._psi[i];
                }
            }
            return najstariji;
        }
        return null;
    }

    public pronadjiNajmladjeg(): Pas{
        if(this._psi.length > 0){
            let najmladji = this._psi[0];
            for(let i = 1; i < this._psi.length; i++){
                if(najmladji.starost > this._psi[i].starost){
                    najmladji = this._psi[i];
                }
            }
            return najmladji;
        }
        return null;
    }

    public ispisiVakcinisane():void{
        let vakcinisani = [];
        for(let i in this._psi){
            if(this._psi[i].vakcinisan){
                vakcinisani.push(this._psi[i].ime);
            }
        }
        console.log(`Vakcinisani su: ${vakcinisani}`);
        
    }

}

let p1 = new Pas("Vucko", 1, "Sarplaninac", true);
let p2 = new Pas("Lajka", 3, "Mongrel-Husky-Terrier", false);
let p3 = new Pas("Rex", 4, "terijer", true);
let p4 = new Pas("Lesi", 5, "Skotski ovcar", true);
let p5 = new Pas("Beethoven", 2, "Bernardinac", false);
let p6 = new Pas("Snoopy", 68, "Dodž", false);
let p7 = new Pas("Scooby Doo", 48, "Nemacka doga", true);

p1.ispisPodatakaPas();
console.log(`Starost psa u ljudskim godinama: ${p1.starostULjudskimGodinama()}`);

let k = new Kennel("Kennel", "Adressa Kennela");
k.psi = [p1, p2, p3, p4, p5, p6, p7];

console.log("----------------------------------------------------------")
let pns = k.pronadjiNajstarijeg();
console.log(`Najstariji: ${pns.ime} (${pns.starost})`);
console.log("----------------------------------------------------------")
let pnm = k.pronadjiNajmladjeg();
console.log(`Najmladji: ${pnm.ime} (${pnm.starost})`);
console.log("----------------------------------------------------------")
k.ispisiVakcinisane();
p2.vaksinisiPsa();
console.log(`Vakcinisani nakon vakcinacije: ${p2.ime}`);
k.ispisiVakcinisane();
