//replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz".

var fizzbuzz = "";
for(var i = 1; i < 1000;i ++){
    if(i % 3 == 0 && i % 5 == 0){
        fizzbuzz+= 'FizzBuzz, ';
    }else if(i % 3 == 0){
        fizzbuzz += 'Fizz, ';
    }else if(i % 5 == 0){
        fizzbuzz += 'Buzz, ';
    }else{
        fizzbuzz += i + ', ';
    }
}

console.log(fizzbuzz);