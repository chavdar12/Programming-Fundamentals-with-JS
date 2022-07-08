function oddOrEvenSum(num) {
    let numStr = num.toString();
    let even = 0;
    let odd = 0;

    for (let i = 0; i < numStr.length; i++) {
        let digit = Number(numStr[i]);
        if (digit % 2 === 0) {
            even += digit;
        } else {
            odd += digit;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`)
}