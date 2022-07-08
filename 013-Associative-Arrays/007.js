function neighborhoods(arr) {
    let map = new Map();
    let people = arr.shift().split(', ');

    for (let el of people) {
        map.set(el, []);
    }

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let [neighborhood, person] = arr[i].split(' - ');
        if (people.includes(neighborhood)) {
            map.get(neighborhood).push(person);
            count++;
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1].length - a[1].length);

    for (let key of sorted) {
        console.log(`${key[0]}: ${key[1].length}`);
        if (key[1].length > 0) {
            console.log(`--${key[1].join('\n--')}`);
        }
    }
}