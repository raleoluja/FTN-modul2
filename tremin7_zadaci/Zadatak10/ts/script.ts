let roboti: Robot[] = [];

class Robot{
    private _ime: string;

	public get ime(): string {
		return this._ime;
	}

	public set ime(value: string) {
		this._ime = value;
	}

    public pozdrav(): void{
        console.log("Zdravo ja sam robot: " + this._ime + '\n');
        
    }

    public reset(): void{
        this._ime = "";
    }

}

function napraviIme(): string{
    let duplikat: boolean = false;
    let ime: string = "";

    do {
        let slova = '';
        let brojevi = '';

        for (let index = 0; index < 2; index++) {
            let r = Math.round(Math.random() * 25 + 65);
            slova += String.fromCharCode(r);
        }

        for (let index = 0; index < 3; index++) {
            let r = Math.round(Math.random() * 9);
            brojevi += r;
        }

        ime = slova.concat(brojevi);

        roboti.forEach(robot => {
            if (robot.ime == ime) {
                duplikat = true;
            }
        });

    } while (duplikat);

    return ime;

}


for (let index = 0; index < 100; index++) {
    let r1 = new Robot();
    r1.ime = napraviIme();
    roboti.push(r1);
    r1.pozdrav();
    
}

