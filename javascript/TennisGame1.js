// Beseder

var Score = function() {
	
	this.score = 0;
	this.scoreArray = ["Love", "Fifteen", "Thirty", "Forty"];
	
	this.increase = function() {
		if (this.score <= 3) {
			this.score++;
		}
	};
	
	this.isTie = function(other) {
		return this.score === other.score;
	};
	
	this.isWin = function(other) {
		return this.score >= 4 && Math.abs(this.score - other.score) >= 2;
	};

	this.getTieText = function(n) {
		switch (n) {
			case 0: case 1: case 2: return this.scoreArray[n] + "-All";
			default: return "Deuce";
		};
	};
	
	this.getScoreText = function(other) {
		if (this.isTie(other)) {
			return this.getTieText(this.score);
		} 
		
		
		return "zubi";
	};
	
};

var PlayerInfo = function(name) {
	this.name = name;
	this.score = new Score();
};

var calculateScore = function(player1, player2) {
	return player1.score.getScoreText(player2.score);
};

var TennisGame1 = function(player1Name, player2Name) {
	this.player1 = new PlayerInfo(player1Name);
	this.player2 = new PlayerInfo(player2Name);
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.player1.score.increase();
    else
        this.player2.score.increase();
};

TennisGame1.prototype.getScore = function() {
    return calculateScore(this.player1, this.player2);
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}