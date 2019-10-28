/// <reference path="Inzenjer.ts" />

class Doktor extends Radnik{

	constructor(ime: string, prezime: string, starost: number, osnovicaPlate: number) {
        super(ime, prezime, starost, osnovicaPlate);
	}

    get plata(): number{
        return (this.osnovicaPlate * 0.13) + this.osnovicaPlate;
    }
}