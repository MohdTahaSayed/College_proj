const math = require("./math-module");

console.log("Addition:", math.add(20, 10));

console.log("Subtraction:", math.subtract(20, 10));

console.log("Multiplication:", math.multiply(20, 10));

try {
    console.log("Division:", math.divide(20, 10));
} catch (error) {
    console.error(error.message);
}