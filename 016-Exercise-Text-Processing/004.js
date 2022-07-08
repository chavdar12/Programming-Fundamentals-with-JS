function stringSubstring(find, text) {
    let words = text.split(' ');
    if (words.map(t => t.toLocaleLowerCase()).includes(find)) {
        return console.log(find);
    }
    console.log(`${find} not found!`);
}
