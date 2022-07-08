function sumFirstAndLast(arrStr) {
    let first = Number(arrStr.shift());
    let last = Number(arrStr.pop());

    return first + last;
}