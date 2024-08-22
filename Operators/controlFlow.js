let log = console.log;

if(2 + 3 ==4) {
log("It is correct!")
}
else {
    log("It is incorrect!")
}

let age = -25;
if (age >0 && age < 18) {
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
