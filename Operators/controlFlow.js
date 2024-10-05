let log = console.log;

if(2 + 3 ==4) {
log("It is correct!")
}
else {
    log("It is incorrect!")
}

let age = -25;
if (age > 0 && age < 18) {
    log("You are not an adult.")
}
else if (age > 18 && age < 65) {
    log("You are an adult.")
}
else if (age > 65) {
    log("You can retire now.")
}
else {
    log("Hmmm, something went wrong.");
}



// Ternary Operator

let isHealthy = true;

log(isHealthy ? `Harry is well` : `Harry is ill.`);


// Switch: 

let subject = "math";
switch(subject) {
    case "chemistry":
        log("You are going to learn more about different matiriels.")
        break;

    case "math":
        log("math is all abiout numbers and there properties.")
        break;
        default:
            log(`Oops, I am not sure about ${subject}.`);
}



//дз - разные варианты погоды (рекомендации "плохая погода - лучше остаться дома/сходить к Пяточку итд")