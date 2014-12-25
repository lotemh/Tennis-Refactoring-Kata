	
var TennisGame1 = (function() {	
	// defines player
	function Player(pName) {
        this.name = pName;
        this.score = 0;
    }
	
	// player getters and methods to prototype
	Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.getPoints = function () {
        return this.score;
    };
    Player.prototype.addPoint = function () {
        this.score++;
    };
	
	
	// defines tennis game
	
	var TennisGame = function (player1Name, player2Name){
	    this.player1 = new Player(player1Name);
        this.player2 = new Player(player2Name);
		this.scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];
	};
	TennisGame.prototype.getPlayerByName = function(name) {
        return (name === this.player1.getName()) ? this.player1 : this.player2;
    };

    TennisGame.prototype.wonPoint = function (name) {
        this.getPlayerByName(name).addPoint();
    };
	
	TennisGame.prototype.calcAdvantage = function() {
            var scorePrefix = (Math.abs(this.player1score - this.player2score) === 1) ? "Advantage" : "Win for";
            var winner = (this.player1score > this.player2score) ? this.player1 : this.player2;
			console.log(this.player1score , this.player2score);
			
			var winnerName = winner.getName();
            return scorePrefix + " " + winnerName;
        }
	
    TennisGame.prototype.getScore = function () {
        this.player1score = this.player1.getPoints();
        this.player2score = this.player2.getPoints();

			// tie case
        if (this.player1score === this.player2score) {
            score = (this.player1score <= 2) ? (this.scoreNames[this.player1score] + "-All") : "Deuce";
			// more then 4 point case
        } else if (this.player1score >= 4 || this.player2score >= 4) {
            score = this.calcAdvantage();
			// lower then 4 case
        } else {
            score = this.scoreNames[this.player1score] + "-" + this.scoreNames[this.player2score];
        }
        return score;
		
    };
	    return function (player1Name, player2Name) {
		return new TennisGame(player1Name, player2Name);
    };
})();
if (typeof window === "undefined") {
    module.exports = TennisGame1;
}