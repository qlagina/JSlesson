let log = console.log;

let characters = ["Harry", "Ron", "Hermione", "Albus", "Severus", "Sirius", "Tom"];

log(characters);
log(characters.slice(0,3));
log(characters.indexOf("Albus"));


let teachers = "Albus, Severus";
log(teachers);

let characters_2 = Array.from(characters);
log("push:", characters_2.push("Minerva"));
log("push:", characters_2.push("Draco"));

log(characters_2);


log(characters_2.splice(4, 5, "Rubeus"));
log(characters_2);

