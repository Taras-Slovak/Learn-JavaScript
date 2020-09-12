'use strict';

let personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    toggleVisibleMyDB: function () {

        if (personalMovieDB.privat) {

            personalMovieDB.privat = false;

        } else {

            personalMovieDB.privat = true;
        }

    },

    start: function () {

        do {
            personalMovieDB.count = prompt('Скільки ти фільмів вже подивився?', '');

            if (personalMovieDB.count === '') {
                alert('Пусто');
            }
            if (personalMovieDB.count === null) {
                alert('Нажато відміна');
            }
            if (isNaN(personalMovieDB.count)) {
                alert('Тільки цифри');
            }
            if (personalMovieDB.count >= 1000) {
                alert('Помилка');
            }

        } while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count) || personalMovieDB.count.length > 3);

    },

    detectPersonalLevel: function () {

        if (personalMovieDB.count  > 0 && personalMovieDB.count  <= 250) {
            alert('Мала кількість, покзник для начинаючого кіномана');
        }
        if (personalMovieDB.count  > 251 && personalMovieDB.count  <= 500) {
            alert('В можете вступити в клуб кіноманів');
        }
        if (personalMovieDB.count  > 501 && personalMovieDB.count  <= 750) {
            alert('Ви гуру серед кіноманів');
        }
        if (personalMovieDB.count  > 750 && personalMovieDB.count  <= 999) {
            alert('Це тягне на рекорд Гінеса');
        }
    },

    rememberMyFilms: function () {

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

            } while (b === '' || b === null || isNaN(b) || b.length > 2);

            personalMovieDB.movies[a] = b;

        }
    },

    writeYourGeres: function () {

        for (let i = 0; i < 3; i++ ) {

            personalMovieDB.genres[i] = prompt(`Ваш улуюлений жанр під номером ${i+1}`);

            if (personalMovieDB.genres[i] === null || personalMovieDB.genres[i]=== '' ){
                alert(`Повторіть ввід !!!`);
                i--;
            } 

        }

        personalMovieDB.genres.forEach(function (item, i) {
         
            console.log(`Любимий жанр № ${i+1} це ${item}`);

        });

    },
 

    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    }

};


personalMovieDB.writeYourGeres();

// personalMovieDB.toggleVisibleMyDB();



personalMovieDB.showMyDB();

