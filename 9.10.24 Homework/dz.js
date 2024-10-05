let log = console.log;

// Rectangle - площадь прямоугольника
// let b = 5 // ширина прямоугольника
function Rectangle(a, b) {
   return a * b;
}
log(Rectangle(7, 3));


//PRectangle - периметр прямоугольника
function PRectangle(a, b) {
   return (a+b)*2;
}
log(PRectangle(7, 5));



//Circle - площадь круга
//R - радиус круга
function Circle(R) {
   return 3.14 * R * R;
}
log(Circle(4));

//Triangle - площадь треугольника
//h - высота, y - основание
//let h = 12
function Triangle(y, h) {
    return 0.5 * h * y;
 }
 log(Triangle(3, 12));

// средняя линия
 function Midline(a, b) {
   return 0.5 * (a + b);
}
log(Midline(5, 6));


// объем куба
function Cube(a) {
   return a ** 3;
}
log(Cube(4));




//дз написать вспомогательные функции: 1) вычисляет площадь прямоугольника, 2) площадь круга 3)периметр прямоугольника 4) площадь треугольника 5) средняя линия трапеции 6) объем куба