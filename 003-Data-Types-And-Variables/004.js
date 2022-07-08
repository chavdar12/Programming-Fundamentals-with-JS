function amazingNum(num) {
    let numStr = num.toString();
    let result = 0;

    for (let i = 0; i < numStr.length; i++) {
        let current = Number(numStr[i]);
        result += current;
    }

    let resultStr = result.toString();
    let nine = false;

    for (let j = 0; j < resultStr.length; j++) {
        if (resultStr[j] === '9') {
            nine = true;
            break;
        }
    }
    console.log(`${num} Amazing? ${nine ? 'True' : 'False'}`)
}