var TennisGame1 = function(player1Name, player2Name) {
    this.playerOneScore = 0;
    this.playerTwoScore = 0;

    this.playerOneName = player1Name;
    this.playerTwoName = player2Name;
};

TennisGame1.prototype.wonPoint = function (playerName) {
    return playerName === this.playerOneName ? this.playerOneScore++ : this.playerTwoScore++;
};

TennisGame1.prototype.getScore = function () {
    var score = "";
    if (this.playerOneScore === this.playerTwoScore) {
        var convertedScore = convertScoreToPhrase(this.playerOneScore);
        score += convertedScore && convertedScore != "Forty" ? convertedScore + "-All" : "Deuce";
    } else if (this.playerOneScore >= 4 || this.playerTwoScore >= 4) {
        var minusResult = this.playerOneScore - this.playerTwoScore;
        var leadingPlayerName = (minusResult > 0) ? this.playerOneName : this.playerTwoName;
        score = minusResult * minusResult === 1 ? "Advantage " + leadingPlayerName : "Win for " + leadingPlayerName;
    } else {
        score = convertScoreToPhrase(this.playerOneScore) + "-" + convertScoreToPhrase(this.playerTwoScore);
    }
    return score;
};

convertScoreToPhrase = function (score) {
    switch (score) {
        case 0:
            return "Love";
        case 1:
            return "Fifteen";
        case 2:
            return "Thirty";
        case 3:
            return "Forty";
    }
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}