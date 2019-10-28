/// <reference path="person.ts" />

class Player extends Person{

    private _highScore: number;


	constructor() {
        super();
        this._highScore = 0;
	}

    public formatName(){
        return super.formatName() + ` (${this._highScore})`;
    }
}