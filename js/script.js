"Use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
                personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
            
                while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
                }
            },
    rememberMyFilms: function() {
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
    detectPersonalLevel: function() {
                            if (personalMovieDB.count < 10) {
                                alert("Просмотрено довольно мало фильмов")
                            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                                alert("Вы классический зритель")
                            } else if (personalMovieDB.count > 30) {
                                alert("Вы киноман")
                            } else (alert("Ошибка"));
                        },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
           
            if (genre === '' || genre === null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }    

            personalMovieDB.genres.forEach((item, a) => {
                console.log (`Любимый жанр ${a + 1} - это ${item}`);
            }); 
    },
    toogleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
    } else {
        personalMovieDB.privat = true
    }
},
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.writeYourGenres();

// personalMovieDB.toogleVisibleMyDB();

// personalMovieDB.showMyDB();