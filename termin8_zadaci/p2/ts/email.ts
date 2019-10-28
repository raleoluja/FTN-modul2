/// <reference path="poruka.ts" />

class Email extends Poruka{
    private emailPrimaoca: string;
    private emailPosiljaoca: string;


	constructor(nazivPosiljaoca: string, nazivPrimaoca: string, sadrzajPoruke: string, $emailPrimaoca: string, $emailPosiljaoca: string) {
        super(nazivPosiljaoca, nazivPrimaoca, sadrzajPoruke);
		this.emailPrimaoca = $emailPrimaoca;
		this.emailPosiljaoca = $emailPosiljaoca;
    }
    

    public stampaj() {
        return `${super.stampaj()}, ${this.emailPosiljaoca}, ${this.emailPrimaoca}`;
    }

}