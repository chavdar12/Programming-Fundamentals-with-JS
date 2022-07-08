function login(arr) {
    let username = arr.shift();
    let pass = username.split('');
    let passReversed = pass.reverse();
    let password = passReversed.join('');

    let count = 1;
    while (true) {
        let word = arr.shift();

        if (count === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }

        if (word === password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
        }

        count++;
    }
}