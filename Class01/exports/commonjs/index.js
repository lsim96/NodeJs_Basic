//Option 1
const math = require("./math.js");
console.log(math.add(2, 3));

//Option 2
const { add, subtract } = require("./math.js");
console.log(add(5, 7));
console.log(subtract(20, 8));
