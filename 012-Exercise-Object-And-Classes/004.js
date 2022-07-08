function movies(list) {
    let films = [];

    for (let task of list) {
        if (task.includes('addMovie')) {
            let [...movieName] = task.split(' ');
            let movieNameStr = movieName.join(' ');

            let film = {
                name: movieNameStr,
                director: '',
                date: '',
            }

            films.push(film);

        } else if (task.includes('directedBy')) {
            let tokens = task.split(' ');
            let movieNameToken = [];
            let directorNameToken = [];

            let directorIndex = tokens.findIndex(x => x === 'directedBy');
            for (let i = 0; i < directorIndex; i++) {
                movieNameToken.push(tokens[i]);
            }
            for (let i = directorIndex + 1; i < tokens.length; i++) {
                directorNameToken.push(tokens[i]);
            }

            let name = movieNameToken.join(' ');
            let director = directorNameToken.join(' ');

            let film = films.find(x => x.name === name);
            if (film) {
                film.director = director;
            }

        } else {
            let tokens = task.split(' ');
            let date = tokens.pop();
            tokens.pop();
            let name = tokens.join(' ');

            let film = films.find(x => x.name === name);
            if (film) {
                film.date = date;
            }
        }
    }

    for (let movie of films) {
        if (movie.director && movie.date && movie.name) {
            console.log(JSON.stringify(movie));
        }
    }
}