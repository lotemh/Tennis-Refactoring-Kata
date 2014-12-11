var TennisGame5 = (function(){
    'use strict';

    var p1;
    var p2;

    var getPlayerByName = function(playerName) {
        return (playerName === p1.getName()) ? p1 : p2;
    };

    var getPlayer = function(index) {
        return (index === 1) ? p1 : p2;
    };

    var Game = function(){};

    Game.prototype.wonPoint = function (playerName) {
        getPlayerByName(playerName).addPoint();
    };

    Game.prototype.getScore = function getScore() {
        var scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];
        var scoreResult,
            score1 = getPlayer(1).getScore(),
            score2 = getPlayer(2).getScore();

        function getAdvantageScore(score1, score2) {
            var scoreType = (Math.abs(score1 - score2) === 1) ? "Advantage" : "Win for";
            var winner = (score1 > score2) ?  getPlayer(1) : getPlayer(2);
            return scoreType + " " + winner.getName();
        }

        if (score1 === score2) {
            scoreResult = (score1 < 3) ? (scoreNames[score1] + "-All") : "Deuce";
        } else if (score1 >= 4 || score2 >= 4) {
            scoreResult = getAdvantageScore(score1, score2);
        } else {
            scoreResult = scoreNames[score1] + "-" + scoreNames[score2];
        }
        return scoreResult;
    };

    return function (player1Name, player2Name) {
        p1 = new Player(player1Name);
        p2 = new Player(player2Name);

        return new Game();
    };
})();

function Player(name) {
    this.name = name;
    this.score = 0;
}

Player.prototype.getName = function () {
    return this.name
};
Player.prototype.getScore = function () {
    return this.score
};
Player.prototype.addPoint = function () {
    this.score++
};

if (typeof window === "undefined") {
    module.exports = TennisGame5;
}
