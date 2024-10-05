let log = console.log;
let numbers = [1, 2, 3];
let student = {first_name: "Harry", last_name: "Potter", age: 11};

for(let key in student) {
    log(key);

}



for(let key in student) {
    log(student[key]);
    

}