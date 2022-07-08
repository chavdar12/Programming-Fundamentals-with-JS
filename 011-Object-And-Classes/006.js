function songs(arr) {
    class Song {
        typeList;

        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }

        play() {
            if (this.typeList === this.typeList) {
                console.log(`${this.typeList}_${this.name}_${this.time}`);
            }
        }
    }

    let songs = [];
    let count = arr.shift();
    let typeSong = arr.pop();

    for (let i = 0; i < count; i++) {
        let [type, name, time] = arr[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeSong === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}