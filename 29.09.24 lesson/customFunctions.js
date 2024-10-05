let log = console.log;


function plusOne(a) {
   return (a + 1);
}

let myNum = plusOne(10)

log(plusOne(7));
log(myNum);



function sum(c) {
    // c: array
    let total = 0;
    log("c:", c);


    for(let n = 0; n < c.length; n++) {
        log("n:", n);
        log("c[n]: ", c[n]);

        total = total + c[n]
        log("total:", total);

    }
    return total;
}

log(sum (3, 2));
log(sum([1, 3, 11]));




let max = function(a, b) {
    log(`${a} > ${b} -> ${a > b}}`);
    log(`${a} > ${b} -> ${a < b}}`);


};


let min = (a, b) => {
    return a < b;
};

const sayHello = () => "Hello, you."
const greeting = (time) => time < 12 ? "Good Morning": "Good Afternoon";

max(2, 3);
log(max);
log(sum);
log(min(5, 7));
log(sayHello());
log(greeting(19));

//дз написать вспомогательные функции: 1) вычисляет площадь прямоугольника, 2) площадь круга 3)периметр прямоугольника 4) площадь треугольника 5) средняя линия трапеции 6) объем куба