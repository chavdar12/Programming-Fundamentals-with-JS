function dictionary(list) {
    let dictObj = {}, word = [], explain = [];

    for (let task of list) {
        let taskObject = JSON.parse(task);
        Object.assign(dictObj, taskObject);
    }

    let entries = Object.entries(dictObj);
    for (let [key, value] of entries) {
        word.push(key);
        explain.push(value);
    }
    word.sort();
    for (let i = 0; i < word.length; i++) {
        console.log(`Term: ${word[i]} => Definition: ${dictObj[word[i]]}`);
    }
}