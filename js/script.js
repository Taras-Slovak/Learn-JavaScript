'use strict';

let numberOfFilms;

do {
    numberOfFilms = prompt('Скільки ти фільмів вже подивився?', '');

} while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms) || numberOfFilms.length > 2);

if (numberOfFilms < 11) {
    alert('Дуже мала кілкість');
} else if (numberOfFilms < 30) {
    alert('Достаня кількість');
} else if (numberOfFilms < 50) {
    alert('Ви кіноман');
} else {
    alert('Помилка');
}



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let a,
    b ;

for (let i = 0; i < 2; i++){
    
    do {
        a = prompt('Один із послідніх фільмів, які Ви подивились?', '');
    } while (a === '' || a === null || a.length > 50);

        do {
        b = prompt('Яку оцінку поставите йому?', '');
    } while (b === '' || b === null || isNaN(b) || b.length > 2);

    personalMovieDB.movies[a] = b;
}


console.log(personalMovieDB);