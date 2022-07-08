function maxNum(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let top = true;

        for (let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j];

            if (rightNum >= current) {
                top = false;
                break;
            }
        }

        if (top) {
            newArr.push(current);
        }
    }
    console.log(newArr.join(' '));
}