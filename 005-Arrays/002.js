function weekDays(num) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];
    let day = num - 1;

    if (num >= 1 && num <= 7) {
        console.log(days[day]);
    } else {
        console.log('Invalid day!');
    }
}