function houseParty(arr) {
    let guests = [];
    for (let command of arr) {
        let text = command.split(' ');
        if (!text.includes("not")) {
            if (guests.includes(text[0])) {
                console.log(`${text[0]} is already in the list!`);
            } else {
                guests.push(text[0]);
            }
        } else {
            if (guests.includes(text[0])) {
                guests.pop(text[0]);
            } else {
                console.log(`${text[0]} is not in the list!`)
            }
        }
    }
    console.log(guests.join('\n'));
}