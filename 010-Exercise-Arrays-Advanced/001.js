function trainSum(arr) {
    let train = arr.shift().split(' ').map(Number);
    let max = Number(arr.shift());

    for (let command of arr) {
        let current = command.split(' ');

        if (current[0] === "Add") {
            let passengers = Number(current[1]);
            train.push(passengers);
        } else {
            let passengers = Number(current[0]);
            for (let i = 0; i < train.length; i++) {
                if (train[i] + passengers <= max) {
                    train[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(train.join(' '));
}