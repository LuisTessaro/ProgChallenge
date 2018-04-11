var possible = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var fs = require('fs');

var minAmountNames = 2;
var maxAmountNames = 4;
var maxAmountLettersInEachName = 10;

for (var i = 0; i < 500; i++) {
    fs.appendFile('./1/names.txt', i + ' ' + generateEach(minAmountNames, maxAmountNames, maxAmountLettersInEachName) + '\n', function (err) {
        if (err) throw err;
        console.log('Added ');
    });
}

function randBoy(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function generateName(nameSize) {
    var name = "";
    for (var j = 0; j < nameSize; j++) {
        name += possible[randBoy(0, 25)];
    }
    name = name.charAt(0).toUpperCase() + name.slice(1)
    return name;
}

function generateEach(minNames, maxNames, nameSize) {
    var names = randBoy(minNames, maxNames);
    var name = "";
    for (var i = 0; i < names; i++) {
        var nameSize = randBoy(2, 10);
        name += generateName(nameSize) + ' ';
    }
    return name;
}
