function pascalCase(text) {
    let result = text[0];
    let lowerText = text.toLocaleLowerCase();

    for (let i = 1; i < text.length; i++) {
        if (text[i] !== lowerText[i]) {
            result += ", ";
        }
        result += text[i];
    }
    console.log(result);
}