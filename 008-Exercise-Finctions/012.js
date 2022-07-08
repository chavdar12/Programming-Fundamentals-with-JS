function factorialDivision(n1, n2) {
    let result1 = 1;
    for (let i = n1; i > 1; i--) {
        result1 = result1 * i;
    }

    let result2 = 1;
    for (let i = n2; i > 1; i--) {
        result2 = result2 * i;
    }

    let final = (result1 / result2).toFixed(2);
    console.log(final);
}