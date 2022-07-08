function intOrFloat(a, b, c) {
    let result = a + b + c;
    let rounded = Math.round(result);

    if (result === rounded) {
        console.log(`${result}- Integer`);
    } else {
        console.log(`${result}- Float`);

    }
}