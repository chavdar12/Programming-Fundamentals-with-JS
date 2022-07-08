function arrManipulator(numbers, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');
        if (tokens[0] === 'add') {
            let idx = Number(tokens[1]);
            let element = Number(tokens[2]);
            numbers.splice(idx, 0, element);
        } else if (tokens[0] === 'addMany') {
            let idx1 = Number(tokens[1]);
            tokens.splice(0, 2);
            let addNums = tokens.map(Number);
            numbers.splice(idx1, 0, ...addNums);
        } else if (tokens[0] === 'contains') {
            let result = numbers.indexOf(Number(tokens[1]));
            console.log(result);
        } else if (tokens[0] === 'remove') {
            let idx2 = Number(tokens[1]);
            numbers.splice(idx2, 1);
        } else if (tokens[0] === 'shift') {
            let times = Number(tokens[1]);
            for (let i = 0; i < times; i++) {
                numbers.push(numbers.shift());
            }
        } else if (tokens[0] === 'sumPairs') {
            let sumArr = [];
            if (numbers.length % 2 !== 0) {
                numbers.push(0);
            }
            for (let i = 0; i < numbers.length - 1; i += 2) {
                let add = numbers[i] + numbers[i + 1];
                sumArr.push(add);
            }
            numbers = sumArr;
        } else if (tokens[0] === 'print') {
            console.log(`[ ${numbers.join(', ')} ]`);
            return;
        }
    }
}