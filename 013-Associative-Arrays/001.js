function phoneBook(arr) {
    let bookObj = {};

    for (let token of arr) {
        let [name, number] = token.split(' ');
        bookObj[name] = number;
    }
    for (let key in bookObj) {
        console.log(`${key} -> ${bookObj[key]}`);
    }
}