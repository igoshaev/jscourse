"Use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?");
          b = prompt("На сколько вы оцените его?");

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
        alert("Некорректный формат данных");
    }
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель")
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман")
} else (alert("Ошибка"));

console.log(personalMovieDB)

// const a = prompt("Один из последних просмотренных фильмов?"),
//       b = prompt("На сколько вы оцените его?"),
//       c = prompt("Один из последних просмотренных фильмов?"),
//       d = prompt("На сколько вы оцените его?");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);