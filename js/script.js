'use strict';

let numberOfFilms;



function start() {

    do {
        numberOfFilms = prompt('Скільки ти фільмів вже подивився?', '');

        if (numberOfFilms === '') {
            alert('Пусто');
        }
        if (numberOfFilms === null) {
            alert('Нажато відміна');
        }
        if (isNaN(numberOfFilms)) {
            alert('Тільки цифри');
        }
        if (numberOfFilms >= 1000) {
            alert('Помилка');
        }

    } while (numberOfFilms ==='' || numberOfFilms === null || isNaN(numberOfFilms) || numberOfFilms.length > 3);

}

// start();


function detectPersonalLevel() {

    if (numberOfFilms > 0 && numberOfFilms <= 250) {
        alert('Мала кількість, покзник для начинаючого кіномана');
    }
    if (numberOfFilms > 251 && numberOfFilms <= 500) {
        alert('В можете вступити в клуб кіноманів');
    }
    if (numberOfFilms > 501 && numberOfFilms <= 750) {
        alert('Ви гуру серед кіноманів');
    }
    if (numberOfFilms > 750 && numberOfFilms <= 999) {
        alert('Це тягне на рекорд Гінеса');
    }
}


// detectPersonalLevel();


let personalMovieDB = {

    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {

    let a,
        b;

    for (let i = 0; i < 2; i++) {

        do {
            a = prompt('Один із послідніх фільмів, які Ви подивились?', '');

            if (a === '') {
                alert('Пусто');
            }
            if (a === null) {
                alert('Нажато відміна');
                continue;
            }
            if (a.length > 50) {
                alert('Перевищина кількість знаків');
            }


        } while (a == '' || a == null || a.length > 50);

        do {
            b = prompt('Яку оцінку поставите йому?', '');

            if (b === '') {
                alert('Пусто');
            }
            if (b === null) {
                alert('Нажато відміна');
            }
            if (isNaN(b)) {
                alert('Тільки цифри');
            }
            if (b > 100) {
                alert('Рейтинг з 0 до 100');
            }

        } while (b ==='' || b === null || isNaN(b) || b.length > 2);

        personalMovieDB.movies[a] = b;

    }
}

// rememberMyFilms();

function writeYourGeres () {

    for (let i = 0; i < 3; i++) {
        
        personalMovieDB.genres[i] = prompt(`Ваш улуюлений жанр під номером ${i + 1 }`);
    }

    

}

writeYourGeres ();

function showMyDB () {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDB();