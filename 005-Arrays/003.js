function reversed(num, arr) {
    let sliceArr = [];

    for (let i = 0; i < num; i++) {
        sliceArr.push(arr[i]);
    }

    let newArr = [];

    for (let j = sliceArr.length - 1; j >= 0; j--) {
        newArr.push(sliceArr[j]);
    }

    console.log(newArr.join(' '));
}