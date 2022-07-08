function racing(input) {
    let namePattern = '/[A-Za-z]/g', distancePattern = '/\d/g', racersName = input.shift().split(', '), racers = {};
    for (let name of racersName) {
        racers[name] = 0;
    }

    while (input[0] !== 'end of race') {
        let line = input.shift();

        let letters = line.match(namePattern);
        let numbers = line.match(distancePattern);

        let name = letters.join('')
        let distances = numbers.map(Number);


        if (racers[name] !== undefined) {
            let totalDist = 0;
            for (let digit of distances) {
                totalDist += digit;
            }
            racers[name] += totalDist;
        }
    }

    let sorted = Object.entries(racers).sort((a, b) => b[1] - a[1]).slice(0, 3);
    if (sorted[0]) {
        console.log('1st place: ' + sorted[0][0]);
    }
    if (sorted[1]) {
        console.log('2nd place: ' + sorted[1][0]);
    }
    if (sorted[2]) {
        console.log('3rd place: ' + sorted[2][0]);
    }
}