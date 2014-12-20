var TennisGame1 = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
};

TennisGame1.prototype.wonPoint = function (playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

TennisGame1.prototype.getScore = function () {
    var score = "";
    if (this.m_score1 === this.m_score2) {
        var convertedScore = convertScoreToPhrase(this.m_score1);
        score += convertedScore && convertedScore != "Forty" ? convertedScore + "-All" : "Deuce";
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        var minusResult = this.m_score1 - this.m_score2;
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
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