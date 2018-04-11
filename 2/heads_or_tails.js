function randBoy(min, max) {
    return Math.floor((Math.random() * max) + min);
}

for (var i = 0; i < 500; i++) {
    randBoy(0,2) === 1 ? console.log("heads") : console.log("tails");
}