let log = console.log;

let inStock = [["milk", 100], ["eggs", 135], ["apples", 202]];

log(inStock[0] [0], inStock [0] [1]);

for(let item in inStock) {
    log(inStock [item] [0]);
}

for(let item of inStock) {
    log(item);
}


for(let item = 0; item < inStock.length - 1; item++) {
    log(inStock [item] [1], inStock [item + 1] [1]);
}




