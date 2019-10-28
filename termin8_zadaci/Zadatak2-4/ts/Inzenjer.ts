/// <reference path="Tehnicar.ts" />

class Inzenjer extends Radnik{

	constructor(ime: string, prezime: string, starost: number, osnovicaPlate: number) {
        super(ime, prezime, starost, osnovicaPlate);

    }
    get plata(): number{
        return (this.osnovicaPlate * 0.12) + this.osnovicaPlate;
    }

}