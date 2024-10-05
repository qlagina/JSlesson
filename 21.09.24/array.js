let log = console.log;

let jedi = ["Luke", "Yoda", "Anakin", "Ahsoka", "Yoda", "Obi-Wan", "Elzar Mann"];

log(jedi.slice(-3, -1));


log(jedi.length);

//log(jedi.sort());
//log(jedi.reverse());

log(jedi);
log(jedi.indexOf("Yoda"));

let generals = "Anakin, Obi-Wan, Luke";

generals = generals.split(",");
log(generals);


log(jedi.join(", "));

let jedi_2 = Array.from(jedi);
log("push:", jedi_2.push("Grogu"));
log("push:", jedi_2.push("Dooku"));

log(jedi_2);

let fallen = jedi_2.pop();
log("fallen", fallen);
log("shift:", jedi_2.shift());
log("unshift:", jedi_2.unshift("Celeb"));



log(jedi_2.splice(2, 3, "Sabin"));
//let jedi_splice = jedi_2.splice(2, 3, "Sabin");
log(jedi_2);
//log(jedi_splice);

jedi[1] = "Avar";
log(jedi);


log(jedi.includes("Anakin"));





