/// <reference path="result.ts" />

class Scoreboard {
    private results:Result[] = [];

    public addResult(newResult: Result): void{
        this.results.push(newResult);
    }

    public updateScoreBoard(): void{
        let output: string = "<h2>Scoreboard</h2>"
        for(let i = 0; i < this.results.length; i++){
            let result: Result = this.results[i];
            output += '<h4>';
            output += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>';
        };

        document.getElementById('scores').innerHTML = output;
    }
}