function sum(a, b, c) {
    let result = a + b;
    subtract(result, c);

    function subtract(result, c) {
        result -= c;
        console.log(result);
    }
}