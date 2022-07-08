function hardWords(arr) {
    let words = arr.pop();
    let letter = arr[0].split(' ');

    let result = '';

    for (let token of letter) {
        if (token.charAt(0) === '_') {
            let changeComa = false;
            let changeDot = false;
            if (token.endsWith(',')) {
                changeComa = true;
                token = token.substring(0, token.length - 1);
            }
            if (token.endsWith('.')) {
                changeDot = true;
                token = token.substring(0, token.length - 1);
            }


            for (let word of words) {
                if (token.length === ('_'.repeat(word.length)).length) {
                    if (changeComa) {
                        word += ','
                    } else if (changeDot) {
                        word += '.'
                    }
                    result += word;
                    result += ' ';
                    break;
                }
            }
        } else {
            result += token;
            result += ' ';
        }
    }

    console.log(result);
}