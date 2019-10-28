class Poruka{
    private nazivPosiljaoca: string;
    private nazivPrimaoca: string;
    private sadrzajPoruke: string;


	constructor($nazivPosiljaoca: string, $nazivPrimaoca: string, $sadrzajPoruke: string) {
		this.nazivPosiljaoca = $nazivPosiljaoca;
		this.nazivPrimaoca = $nazivPrimaoca;
		this.sadrzajPoruke = $sadrzajPoruke;
	}



    public stampaj() {
        return `${this.nazivPosiljaoca}, ${this.nazivPrimaoca}, ${this.sadrzajPoruke}`;
        
    }
}