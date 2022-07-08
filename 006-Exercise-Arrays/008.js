function magicSum(arr, num) {
    let num1 = 0;
    let num2 = 0;

    for (let i = 0; i < arr.length; i++) {
        num1 = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            num2 = arr[j];
            if (num1 + num2 === num) {
                console.log(`${num1} ${num2}`);
            }
        }
    }
}