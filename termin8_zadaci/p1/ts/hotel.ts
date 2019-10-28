/// <reference path="smestaj.ts" />

class Hotel extends Smestaj{

    private brojZvezdica: number;

	constructor(naziv: string, adresa: string, grad: string, $brojZvezdica: number) {
        super(naziv, adresa, grad);
		this.brojZvezdica = $brojZvezdica;
    }
    

	public get $brojZvezdica(): number {
		return this.brojZvezdica;
	}

	public set $brojZvezdica(value: number) {
		this.brojZvezdica = value;
    }
    
    stampaj(){
        return `${super.stampaj()}, hotel sa ${this.$brojZvezdica} zvezdice<br><br>`;
    }

    public prestaviSe(): void{
        document.write('<div> Hotel se nalazi u oblasti Al Barsha, na 25 minuta od aerodroma u Dubaiju i 1.5 km od Mall of Emirates, Sharaf DG Metro stanica je udaljena svega 300 metara od hotela. Ibn Batuta Mall i Dubai Marina su takodje u neposrednoj blizini. Odise modernom dekoracijom unutrasnjosti enterijera, gostima hotela su na raspolaganju teretana, otvoreni bazen i 5 restorana internacionalne kuhinje, besplatan WiFi u lobiju hotela, barovi gde gosti mogu da uzivaju u osvezavajucim napicima, hotel nudi poslovni centar zajedno sa salama za sastanke i poslovnih objekata, SPA centar. Sve sobe su klimatizovane i poseduju SAT TV, mini bar, fen za kosu, kupatilo, sef ( uz doplatu). Usluga je na bazi nocenje sa doruckom. </div>');
    }

}