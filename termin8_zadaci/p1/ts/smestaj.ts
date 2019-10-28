class Smestaj{
    protected naziv: string;
    protected adresa: string;
    protected grad: string;


	constructor($naziv: string, $adresa: string, $grad: string) {
		this.naziv = $naziv;
		this.adresa = $adresa;
		this.grad = $grad;
	}


	public get $naziv(): string {
		return this.naziv;
	}

	public get $adresa(): string {
		return this.adresa;
	}

	public get $grad(): string {
		return this.grad;
	}

	public set $naziv(value: string) {
		this.naziv = value;
	}

	public set $adresa(value: string) {
		this.adresa = value;
	}

	public set $grad(value: string) {
		this.grad = value;
    }
    
    public stampaj(){
        return `${this.$naziv}, ${this.$adresa}, ${this.$grad} `;
    }

}