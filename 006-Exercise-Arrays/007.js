function maxSequence(arr) {
    let newArr = [];
    let check = 0;

    for (let i = 0; i < arr.length; i++) {

        let currentNum = Number(arr[i]);
        let sequence = [currentNum];

        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = Number(arr[j]);

            if (nextNum === currentNum) {
                sequence.push(nextNum);
            } else {
                break;
            }
        }

        if (sequence.length > newArr.length) {
            newArr = [];
            for (let k = 0; k < sequence.length; k++) {
                newArr.push(sequence[k]);
            }
        } else if (sequence === newArr.length) {
            if (i < check) {
                check = i;
            }
        }
    }

    console.log(newArr.join(' '));
}