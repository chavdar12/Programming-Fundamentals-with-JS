function bombNums(arr1, arr2) {
    let bomb = arr2[0];
    let count = arr2[1];

    while (arr1.includes(bomb)) {
        let bombIndex = arr1.indexOf(bomb);
        let start = bombIndex - count;
        let end = count * 2 + 1;

        if (start < 0) {
            end -= bombIndex;
            start = 0;
        }
        arr1.splice(start, end);

    }

    let sum = 0;
    for (let el of arr1) {
        sum += el;
    }
    console.log(sum);
}