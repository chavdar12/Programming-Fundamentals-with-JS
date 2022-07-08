function meetings(arr) {
    let schedule = {};

    for (let token of arr) {
        let [day, person] = token.split(' ');

        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            schedule[day] = person;
        }
    }

    for (let key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}