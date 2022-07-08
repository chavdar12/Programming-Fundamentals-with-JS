function addAndSubtract(a, b, c) {
    function sum(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }

    let sums = sum(a, b);
    return subtract(sums, c);
}