function firstAndLast(arr) {
    let k = arr.shift();

    let forward = [];
    for (let i = 0; i < k; i++) {
        forward.push(arr[i]);
    }
    let backward = [];
    for (let j = arr.length - k; j < arr.length; j++) {
        backward.push(arr[j]);
    }
    console.log(forward.join(' '));
    console.log(backward.join(' '));
}