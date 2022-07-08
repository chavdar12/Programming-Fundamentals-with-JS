function piccolo(arr) {
    let parking = [];

    for (let token of arr) {
        let [action, number] = token.split(', ')
        if (action === 'IN') {
            if (!parking.includes(number)) {
                parking.push(number);
            }
        } else {
            if (parking.includes(number)) {
                parking.splice(parking.indexOf(number), 1);
            }
        }
    }

    let sorted = parking.sort((a, b) => a.localeCompare(b));

    if (parking.length > 0) {
        console.log(sorted.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}