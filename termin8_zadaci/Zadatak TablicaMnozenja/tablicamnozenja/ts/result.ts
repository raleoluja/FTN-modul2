class Result{
  
    private _playerName: string;
    private _score: number;
    private _problemCount: number;
    private _factor: number;


	constructor(playerName: string, score: number, problemCount: number, factor: number) {
		this._playerName = playerName;
		this._score = score;
		this._problemCount = problemCount;
		this._factor = factor;
	}


	public get playerName(): string {
		return this._playerName;
	}

	public get score(): number {
		return this._score;
	}

	public get problemCount(): number {
		return this._problemCount;
	}

	public get factor(): number {
		return this._factor;
	}

	public set playerName(value: string) {
		this._playerName = value;
	}

	public set score(value: number) {
		this._score = value;
	}

	public set problemCount(value: number) {
		this._problemCount = value;
	}

	public set factor(value: number) {
		this._factor = value;
	}

}