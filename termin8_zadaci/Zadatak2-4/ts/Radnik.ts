class Radnik{
    protected ime: string;
    protected prezime: string;
    protected starost: number;
    protected osnovicaPlate: number;


	constructor($ime: string, $prezime: string, $starost: number, $osnovicaPlate: number) {
		this.ime = $ime;
		this.prezime = $prezime;
		this.starost = $starost;
		this.osnovicaPlate = $osnovicaPlate;
	}

	public get $ime(): string {
		return this.ime;
	}

	public get $prezime(): string {
		return this.prezime;
	}

	public get $starost(): number {
		return this.starost;
	}

	public get $osnovicaPlate(): number {
		return this.osnovicaPlate;
	}

	public set $ime(value: string) {
		this.ime = value;
	}

	public set $prezime(value: string) {
		this.prezime = value;
	}

	public set $starost(value: number) {
		this.starost = value;
	}

	public set $osnovicaPlate(value: number) {
		this.osnovicaPlate = value;
    }

    get plata(): number{
        return this.osnovicaPlate;
    }

    get godinaRodjenja(): number{
        let d = new Date();
        let godina = d.getFullYear();
        return godina - this.$starost;
    }

}

let radnici: Radnik[] = [];

function srednjaVrednosGodinaRadnika(): number{
    let starost: number = 0;
    radnici.forEach(radnik => {
        starost += radnik.$starost;
    });
    return starost / radnici.length;
}
