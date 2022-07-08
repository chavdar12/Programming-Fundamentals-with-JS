function extractFile(text) {
    let allFile = text.split('\\');
    let filename = allFile.pop();

    let index = filename.lastIndexOf('.');
    let name = filename.substring(0, index);
    let extension = filename.substring(index + 1);

    console.log(`File name: ${name}\nFile extension: ${extension}`);
}