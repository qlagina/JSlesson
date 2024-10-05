let log = console.log;
let name = "Mary";
for(let line = 0; line < 4; line++) {
    if(line == 2) {
        log(`Happy birthday, dear ${name}`); 
        continue;
    }
       
    log("Happy birthday to you!");
}




let line_2 = 0;
while(line_2 < 4) {
if (line_2 ==2) {
    log(`Happy birthday, dear ${name}`); 
    line_2 = line_2 + 1;
    continue;
}

line_2 = line_2 + 1;
log("Happy birthday to you!");

}
