

console.log('28 C to F : ' + celciusToF(28));
console.log('100 F to C : ' + fToCelcius(100));
console.log('100 F to K : ' + cToK(fToCelcius(100)));
console.log('100 K to F : ' +  celciusToF(kToC(100)));


function celciusToF(c){
    //T(°F) = (°C x 1.8) - 32 = °F
    return c * 1.8000 + 32.00;
}

function fToCelcius(f){
    //T(°C) = (°F - 32) × 5/9 = °C
    return (f - 32) * 5/9;
}

function cToK(c){
    //0c = 273,15 K 100c = 373,15k
    return c + 273.15;
}

function kToC(k){
    return k - 273.15;
}