function sorting(arr) {
    let final = [];
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {

        let add;

        if (i % 2 === 0) {
            add = Math.max(...arr);
        } else {
            add = Math.min(...arr);
        }

        final.push(add);
        arr.splice(arr.indexOf(add), 1);
    }
    console.log(final.join(' '));
}