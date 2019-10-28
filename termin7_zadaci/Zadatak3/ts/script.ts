class Krug{
    private _r: number;

	constructor(r: number = 3) {
        this._r = r;
    };
    
	public get r(): number {
		return this._r;
	}

	public set r(value: number) {
		this._r = value;
	}
    
    public getO() :number{
        return 2 * this._r * Math.PI;
    };

    public getP(): number{
        return this._r * this._r * Math.PI;
    }
       
}

class Pravougaonik{
    private _a: number;
    private _b: number;


	constructor(a: number, b:number) {
        this._a = a;
        this._b = b;
    }


	public get a(): number {
		return this._a;
	}


	public set a(value: number) {
		this._a = value;
	}


	public get b(): number {
		return this._b;
	}


	public set b(value: number) {
		this._b = value;
    }
    
    public getO(): number{
        return 2 * this._a + 2 * this._b;
    }

    public getP():number {
        return this._a * this._b;
    }

}

class Valjak{
    private _krug: Krug;
    private _pravougaonik: Pravougaonik;


	constructor(r: number, h: number) {
		this._krug = new Krug(r);
		this._pravougaonik = new Pravougaonik(2*r, h);
    }

	public get r(): number {
		return this._krug.r;
	}

	public set r(value: number) {
		this._krug.r = value;
	}

	public get h(): number {
		return this._pravougaonik.b;
	}


	public set pravougaonik(value: number) {
		this._pravougaonik.b = value;
    }
    
    public getP():number{
        return 2*this.r*this.r*Math.PI+2*this.r*Math.PI*this.h;
    }

    public getV():number{
        return this.r * this.r * this.h * Math.PI;
    }
}

//test
//krug
let k2: Krug = new Krug(9);
console.log(k2.r);
console.log(k2.getO());
console.log(k2.getP());
//pravougaonik
let p: Pravougaonik = new Pravougaonik(3,5);
console.log(p.a, p.b);
console.log(p.getO());
console.log(p.getP());
//valjak
let v: Valjak = new Valjak(4, 6);
console.log(v.r, v.h);
console.log(v.getP());
console.log(v.getV());









