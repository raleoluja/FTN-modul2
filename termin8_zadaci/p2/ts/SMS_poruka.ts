/// <reference path="poruka.ts" />

class SMSPoruka extends Poruka{
    private brojTelPosijoca: string;
    private brojTelPrimaoca: string;


	constructor(nazivPosiljaoca: string, nazivPrimaoca: string, sadrzajPoruke: string, $brojTelPosijoca: string, $brojTelPrimaoca: string) {
        super(nazivPosiljaoca, nazivPrimaoca, sadrzajPoruke);
		this.brojTelPosijoca = $brojTelPosijoca;
		this.brojTelPrimaoca = $brojTelPrimaoca;
	}


    public stampaj(){
        return `${super.stampaj()}, ${this.brojTelPosijoca}, ${this.brojTelPrimaoca}`;
        
    }
}