var TennisGame1 = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function (playerName) {
    return playerName === this.player1Name ? this.m_score1++ : this.m_score2++;
};

TennisGame1.prototype.getScore = function () {
    var score = "";
    if (this.m_score1 === this.m_score2) {
        var convertedScore = convertScoreToPhrase(this.m_score1);
        score += convertedScore && convertedScore != "Forty" ? convertedScore + "-All" : "Deuce";
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        var minusResult = this.m_score1 - this.m_score2;
        var leadingPlayerName = (minusResult > 0) ? this.player1Name : this.player2Name;
        score = minusResult * minusResult === 1 ? "Advantage " + leadingPlayerName : "Win for " + leadingPlayerName;
    } else {
        score = convertScoreToPhrase(this.m_score1) + "-" + convertScoreToPhrase(this.m_score2);
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