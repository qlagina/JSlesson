let log = console.log;

log(5 == 3); //false
log(5 < 3); //false
log(3 < 5); //true
log(7 <= 10); //true
log(10 <= 10); //true
log(7 != 10); //true


log(7 <= 10 && 0 < 7); //true and true is true
log(7 <= 10 || 0 < 7); //true or true is true
log(!true); //false
