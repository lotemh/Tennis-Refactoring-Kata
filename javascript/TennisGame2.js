// use strict
//prototype

var TennisGame2 = function(player1Name, player2Name) {
    this.P1point = 0;
    this.P2point = 0;

    this.P1res = "";
    this.P2res = "";

	// no use of player1Name
    this.player1Name = player1Name;
	// no use of player2Name
	this.player2Name = player2Name;
};
// so ugly

TennisGame2.prototype.getScore = function() {
    var score = "";

	// one method for all the those cases
    if (this.P1point === this.P2point && this.P1point < 3) {
        if (this.P1point === 0)
            score = "Love";
        if (this.P1point === 1)
            score = "Fifteen";
        if (this.P1point === 2)
            score = "Thirty";
        score += "-All";
    }
    if (this.P1point === this.P2point && this.P1point > 2)
        score = "Deuce";

    if (this.P1point > 0 && this.P2point === 0) {
        if (this.P1point === 1)
            this.P1res = "Fifteen";
        if (this.P1point === 2)
            this.P1res = "Thirty";
        if (this.P1point === 3)
            this.P1res = "Forty";

        this.P2res = "Love";
        score = this.P1res + "-" + this.P2res;
    }
    if (this.P2point > 0 && this.P1point === 0) {
        if (this.P2point === 1)
            this.P2res = "Fifteen";
        if (this.P2point === 2)
            this.P2res = "Thirty";
        if (this.P2point === 3)
            this.P2res = "Forty";

        this.P1res = "Love";
        score = this.P1res + "-" + this.P2res;
    }

    if (this.P1point > this.P2point && this.P1point < 4) {
        if (this.P1point === 2)
            this.P1res = "Thirty";
        if (this.P1point === 3)
            this.P1res = "Forty";
        if (this.P2point === 1)
            this.P2res = "Fifteen";
        if (this.P2point === 2)
            this.P2res = "Thirty";
        score = this.P1res + "-" + this.P2res;
    }
    if (this.P2point > this.P1point && this.P2point < 4) {
        if (this.P2point === 2)
            this.P2res = "Thirty";
        if (this.P2point === 3)
            this.P2res = "Forty";
        if (this.P1point === 1)
            this.P1res = "Fifteen";
        if (this.P1point === 2)
            this.P1res = "Thirty";
        score = this.P1res + "-" + this.P2res;
    }

    if (this.P1point > this.P2point && this.P2point >= 3) {
	// use player1Name
        score = "Advantage player1";
    }

    if (this.P2point > this.P1point && this.P1point >= 3) {
	// use player2Name
        score = "Advantage player2";
    }

    if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
	// use player1Name
        score = "Win for player1";
    }
    if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
        // use player2Name
		score = "Win for player2";
    }
    return score;
};
// never use this method
TennisGame2.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};
// never use this method
TennisGame2.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};
// never use this method
TennisGame2.prototype.P1Score = function() {
    this.P1point++;
};
// never use this method
TennisGame2.prototype.P2Score = function() {
    this.P2point++;
};
// never use this method
TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}