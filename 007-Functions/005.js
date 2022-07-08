function calculator(a, b, operator) {
    let result;
    switch (operator) {
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = a / b;
            break;
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
    }
    console.log(result);
}