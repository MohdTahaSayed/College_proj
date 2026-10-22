function calculateResult(a, b, callback) {

    console.log("Calculating result...");

    const result = a + b;

    callback(result);
}

function displayResult(result) {
    console.log("Result:", result);
}

calculateResult(25, 15, displayResult);