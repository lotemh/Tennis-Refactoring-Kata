var TennisGame1 = function(player1Name, player2Name) {
    this.player1Score = 0;
    this.player2Score = 0;

    this.player1Name = player1Name;
    this.player2Name = player2Name;

    this.constants = {
        dash: '-',
        all: "All",
        advantage: "Advantage ",
        win: "Win for ",
        deuce: "Deuce"
    };

    this.scoreNames = ["Love", "Fifteen", "Thirty", "Forty", "Deuce"];
};

// * Main score-management method *  
TennisGame1.prototype.getScore = function() {
    var score = "";

    if (this.player1Score === this.player2Score) {
        score = this.tie(); 
    } else if (this.player1Score >= 4 || this.player2Score >= 4) {
        score = this.winOrAdvantage();
    } else {
        score = this.regularResult();
    }
    return score;
};


TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === this.player1Name) {
        this.player1Score += 1;
    } else {
        this.player2Score += 1;
    }
};

TennisGame1.prototype.tie = function() {
    if(this.player1Score >= 3) {
            return this.scoreNames[4]
        } else {
            return this.scoreNames[this.player1Score] 
                    + this.constants.dash  
                    + this.constants.all;
        }
};

TennisGame1.prototype.winOrAdvantage = function() {
    var minusResult = this.player1Score - this.player2Score;
    var biggerResPlayerName = minusResult > 0 ? 
        this.player1Name : 
        this.player2Name;

    return minusResult*minusResult === 1 ? 
            this.constants.advantage + biggerResPlayerName : 
            this.constants.win       + biggerResPlayerName;
};

TennisGame1.prototype.regularResult = function() {
    return this.scoreNames[this.player1Score] 
            + this.constants.dash
            + this.scoreNames[this.player2Score];
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
};