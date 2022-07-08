function condenseArr(arr) {
    let sum = 0, {push} = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let num1 = Number(arr[i]);
        let num2 = Number(arr[i + 1]);
        let sum = num1 + num2;
        push(sum);

    }
    console.log(sum);
}