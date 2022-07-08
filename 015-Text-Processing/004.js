function countStrings(text, find) {
    console.log(text.split(' ').filter(x => x === find).length);
}