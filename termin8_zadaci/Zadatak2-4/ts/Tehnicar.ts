/// <reference path="Radnik.ts" />

class Tehnicar extends Radnik{

	constructor(ime: string, prezime: string, starost: number, osnovicaPlate: number) {
        super(ime, prezime, starost, osnovicaPlate);
    }
    
    get plata(): number{
        return this.osnovicaPlate;
    }
}