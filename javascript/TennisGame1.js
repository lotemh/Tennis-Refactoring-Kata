// Beseder

var Score = function() {
	
	this.score = 0;
	this.scoreArray = ["Love", "Fifteen", "Thirty", "Forty"];
	
	this.equals = function(other) {
		return this.score === other.score;
	};
	
	this.increase = function() {
		this.score++;
	};
	
	this.getScoreText = function() {
		if (this.score >= 0 && this.score <= 4) {
			return this.scoreArray[this.score];
		}
	};
	
	this.getTieText = function() {
		if (this.score >= 0 && this.score <= 2) {
			return this.scoreArray[this.score] + "-All"; 
		} else {
			return "Deuce";
		}
	};
	
};

var PlayerInfo = function(name) {
	
	this.name = name;
	this.score = new Score();
	
	this.isTie = function(other) {
		return this.score.equals(other.score);
	};
	
	this.isAdv = function(other) {
		return this.score.score >= 4 && (this.score.score - other.score.score === 1);
	};
	
	this.isWin = function(other) {
		return this.score.score >= 4 && (this.score.score - other.score.score >= 2);
	};
};

var calculateScore = function(player1, player2) {
	
	if (player1.isTie(player2)) {
		return player1.score.getTieText();
	}

	if (player1.isAdv(player2)) {
		return "Advantage " + player1.name;
	}
	
	if (player2.isAdv(player1)) {
		return "Advantage " + player2.name;
	}
	
	if (player1.isWin(player2)) {
		return "Win for " + player1.name;
	}
	
	if (player2.isWin(player1)) {
		return "Win for " + player2.name;
	}
	
	return player1.score.getScoreText() + "-" + player2.score.getScoreText();
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