// While loop
// должна быть контрольная переменная

let log = console.log;

/* 
let i = 0; // j, k - часто встречающиеся переменные
while(i < 10) {
    log("Hello, You are haked");
    //i = i + 1;
    i++; // i + 1
    // ++i
}




//let j = 6;

let userInput = "";

do {
    userInput = prompt("First Name:")
    //log("Hello, You are haked again!");

} while (userInput == "");



let lastName = "";
lastName = prompt("Last Name:");
while(lastName == "") {
    lastName = prompt("Last Name:");
}
*/ 

log("i", "j");


let correctAnswer = 0;
let userAnswer = "";

for(let i = 1; i < 10; i++ ) {
    for(let j = 1; j < 10; j++) {
        correctAnswer = i * j;
    userAnswer = prompt(`${i} * ${j} = `);

    if(userAnswer == correctAnswer) {
        alert("Well-Done!");
    }
    else {
        alert("Better luck next time");
    }
    } 
}

