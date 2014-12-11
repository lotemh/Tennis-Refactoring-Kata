//prototype implementation
var TennisGame1 = (function() {
    'use strict';

    var TennisGame = function (player1Name, player2Name) {
        this.p1 = new Player(player1Name);
        this.p2 = new Player(player2Name);

        this.getPlayer = function (playerName) {
            return (playerName === this.p1.getName()) ? this.p1 : this.p2;
        };
    };

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

    TennisGame.prototype.wonPoint = function (playerName) {
        this.getPlayer(playerName).addPoint();
    };

    TennisGame.prototype.getScore = function () {
        var scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];
        var score,
            score1 = this.p1.getScore(),
            score2 = this.p2.getScore();

        function getAdvantageScore(p1, p2) {
            var scoreType = (Math.abs(score1 - score2) === 1) ? "Advantage" : "Win for";
            var winner = (score1 > score2) ? p1 : p2;
            return scoreType + " " + winner.getName();
        }

        if (score1 === score2) {
            score = (score1 < 3) ? (scoreNames[score1] + "-All") : "Deuce";
        } else if (score1 >= 4 || score2 >= 4) {
            score = getAdvantageScore(this.p1, this.p2);
        } else {
            score = scoreNames[score1] + "-" + scoreNames[score2];
        }
        return score;
    };

    return TennisGame;
})();

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}