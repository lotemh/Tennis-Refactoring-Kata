/**
 * Created by lotemh on 12/9/2014.
 */
var TennisGame4 = function(p1Name, p2Name) {

    this.players = [new Player(p1Name), new Player(p2Name)];

    this.getPlayer = function(name){
        return this.players.filter(function(p){ return p.getName() === name})[0];
    };

    this.getScoreName = function(score){
        var scoreNames = ["Love", "Fifteen", "Thirty", "Forty", "Deuce"];
        return scoreNames[score];
    };

    this.highTie = 4;

    //**** Rules *************

    this.isTie = function(){
        return this.players.reduce(function(p1, p2){return p1.getScore() === p2.getScore()})
    };

    this.getLowTieScore = function(){
        return this.getScoreName(this.players[0].getScore()) + "-All";
    };

    this.isHighTie = function(){
        return this.isTie() && this.players[0].getScore() > 2;
    };

    this.getHighTieScore = function(){
        return this.getScoreName(this.highTie);
    };

    this.isLowScore = function(){
        return this.players.filter(function(p){ return p.getScore() >= 4}).length === 0;
    };

    this.getLowScore = function(){
        return this.getScoreName(this.players[0].getScore()) + "-" + this.getScoreName(this.players[1].getScore());
    };

    this.isAdvantage = function(){
        return (Math.abs(this.players[0].getScore() - this.players[1].getScore()) === 1);
    };

    this.getAdvantageScore = function(){
        return "Advantage " + this.getWinner();
    };

    this.getWinner = function(){
        return this.players.reduce(function(a, b){ return (a.getScore() > b.getScore()) ? a.getName() : b.getName()});
    };

    this.getWinScore = function(){
        return "Win for " + this.getWinner();
    };

    this.isWinner = function(){
        return (Math.abs(this.players[0].getScore() - this.players[1].getScore()) > 1);
    };

    this.rules = [new Rule(this.isHighTie, this.getHighTieScore),
        new Rule(this.isTie, this.getLowTieScore),
        new Rule(this.isLowScore, this.getLowScore),
        new Rule(this.isAdvantage, this.getAdvantageScore),
        new Rule(this.isWinner, this.getWinScore)
    ];
};

TennisGame4.prototype.getScore = function() {
    for (var rule in this.rules){
        if (this.rules[rule].isTrue.call(this)) return this.rules[rule].getScore.call(this);
    }
};

TennisGame4.prototype.wonPoint = function(playerName) {
    this.getPlayer(playerName).addPoint(1);
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
    module.exports = TennisGame4;
}