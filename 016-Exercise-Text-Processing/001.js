function revealWords(words, text) {
    let finds = words.split(', ');
    let textArr = text.split(' ');
    let result = [];

    for (let token of textArr) {
        let replaced = false;

        for (let word of finds) {

            if (token === '*'.repeat(word.length)) {
                result.push(word);
                replaced = true;
            }
        }

        if (!replaced) {
            result.push(token);
        }
    }
    console.log(result.join(' '));
}