/// <reference path="Kamera.ts" />


class VideoKamera extends Kamera{

    private videoCounter: number;


	constructor($videoCounter: number, megaPikseli: number, freeSpace: number, photoCounter: number) {
        super(megaPikseli, freeSpace, photoCounter);
		this.videoCounter = $videoCounter;
    }
    

	public get $videoCounter(): number {
		return this.videoCounter;
	}

	public set $videoCounter(value: number) {
		this.videoCounter = value;
    }
    
    public snimaj(secunde: number):boolean {
        if(this.freeSpace >= (this.megaPikseli * secunde)){
            this.freeSpace -= (this.megaPikseli * secunde);
            this.videoCounter ++;
            return true;
        }
        return false;
    }

}