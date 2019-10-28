class Kamera{
    protected megaPikseli:number;
    protected freeSpace: number;
    protected photoCounter: number;


	constructor($megaPikseli: number, $freeSpace: number, $photoCounter: number) {
		this.megaPikseli = $megaPikseli;
		this.freeSpace = $freeSpace;
		this.photoCounter = $photoCounter;
	}

	public get $megaPikseli(): number {
		return this.megaPikseli;
	}
	public get $freeSpace(): number {
		return this.freeSpace;
	}


	public get $photoCounter(): number {
		return this.photoCounter;
	}

	public set $megaPikseli(value: number) {
		this.megaPikseli = value;
	}

	public set $freeSpace(value: number) {
		this.freeSpace = value;
	}

	public set $photoCounter(value: number) {
		this.photoCounter = value;
    }
    
    public slikaj(): boolean{
        if(this.freeSpace > this.megaPikseli){
            this.freeSpace -= this.megaPikseli;
            this.photoCounter ++;
            return true;
        }
        return false;
        
    }

}