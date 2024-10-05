let log = console.log;

let AmountOfHoney = 15;
if (AmountOfHoney == 0) {
    log("Need to replenish honey supplies...")
}
else if ((AmountOfHoney > 0) && (AmountOfHoney < 10)) {
    log("You need to go collect honey...")
}
else if (AmountOfHoney >= 10 && AmountOfHoney < 20) {
    log("Relax, honey supplies are fine!")
}
else if (AmountOfHoney >= 20 && AmountOfHoney < 30) {
    log("You can have double the honey!")
}
else if (AmountOfHoney >=30) {
    log("OMG, it's time to share some honey!")
}
else {
    log("Something went wrong...");
}

