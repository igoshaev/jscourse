"Use strict";

let numberOfFilms;

const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function start() {
                numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
            
                while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
                    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
                }
                personalMovieDB.count = numberOfFilms;
            },
    rememberMyFilms: function rememberMyFilms() {
                        for (let i = 0; i < 2; i++) {
                            const a = prompt("Один из последних просмотренных фильмов?", ""),
                                b = prompt("На сколько вы оцените его?", "");
                        
                            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                                personalMovieDB.movies[a] = b;
                            } else {
                                i--;
                            }
                        }
    },
    detectPersonalLevel: function detectPersonalLevel() {
                            if (personalMovieDB.count < 10) {
                                alert("Просмотрено довольно мало фильмов")
                            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                                alert("Вы классический зритель")
                            } else if (personalMovieDB.count > 30) {
                                alert("Вы киноман")
                            } else (alert("Ошибка"));
                        },
    writeYourGenres: function writeYourGenres() {
                            for (let i = 0; i < 3; i++) {
                                personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
                            }
                        }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();


// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB();

function toogleVisibleMyDB() {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
    } else if (personalMovieDB.privat === true) {
        personalMovieDB.privat = false;
    }
}

toogleVisibleMyDB();

console.log(personalMovieDB);