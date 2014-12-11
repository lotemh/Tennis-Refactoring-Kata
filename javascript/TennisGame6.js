/**
 * Created by lotemh on 12/9/2014.
 * general implementation. data is separated from logic
 */
var TennisGame6 = (function(){
    var players, rules;

    var getPlayer = function(name){
        return players.filter(function(p){ return p.getName() === name})[0];
    };

    var Game = function(){};

    Game.prototype.getScore = function() {
        return rules.getScore();
    };

    Game.prototype.wonPoint = function(playerName) {
        getPlayer(playerName).addPoint(1);
    };

    return function(p1Name, p2Name) {
        players = [new Player(p1Name), new Player(p2Name)];
        rules = new Rules(players);
        return new Game();
    }
})();

var Rules = function(players) {

    var highTie = 4;

    var getScoreName = function(score){
        var scoreNames = ["Love", "Fifteen", "Thirty", "Forty", "Deuce"];
        return scoreNames[score];
    };

    var isTie = function(){
        var score = players[0].getScore();
        return players.every(function(p){return p.getScore() === score});
    };

    var getLowTieScore = function(){
        return getScoreName(players[0].getScore()) + "-All";
    };

    var isHighTie = function () {
        return isTie() && players[0].getScore() > 2;
    };

    var getHighTieScore = function () {
        return getScoreName(highTie);
    };

    var isLowScore = function () {
        return !isTie() && players.every(function (p) {
            return p.getScore() < highTie
        });
    };

    var getLowScore = function () {
        return getScoreName(players[0].getScore()) + "-" + getScoreName(players[1].getScore());
    };

    var isAdvantage = function () {
        return !isLowScore() && (Math.abs(players[0].getScore() - players[1].getScore()) === 1);
    };

    var getAdvantageScore = function () {
        return "Advantage " + getWinner();
    };

    var getWinner = function () {
        return players.reduce(function (a, b) {
            return (a.getScore() > b.getScore()) ? a.getName() : b.getName()
        });
    };

    var getWinScore = function () {
        return "Win for " + getWinner();
    };

    var isWinner = function () {
        return !isLowScore() && (Math.abs(players[0].getScore() - players[1].getScore()) > 1);
    };

    var rules = [new Rule(isHighTie, getHighTieScore),
        new Rule(isAdvantage, getAdvantageScore),
        new Rule(isLowScore, getLowScore),
        new Rule(isTie, getLowTieScore),
        new Rule(isWinner, getWinScore)
    ];

    function getScore(){
        for (var rule in rules){
            if (rules[rule].isTrue.call(this)) return rules[rule].getScore.call(this);
        }
    }

    return {
        getScore: getScore
    }
};

function Rule(isTrue, getScore){
    this.isTrue = isTrue;
    this.getScore = getScore;
}

function Player(name){
    this.name = name;
    this.score = 0;
}

Player.prototype.getName = function(){
    return this.name;
};

Player.prototype.getScore = function(){
    return this.score;
};

Player.prototype.addPoint = function(points){
    this.score += points;
};

if (typeof window === "undefined") {
    module.exports = TennisGame6;
}