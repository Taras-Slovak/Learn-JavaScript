'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const promo = document.querySelector('.promo__bg'),
        adv = document.querySelectorAll('.promo__adv img'),
        text = document.querySelector('.promo__genre'),
        list = document.querySelector('.promo__interactive-list'),
        btn = document.querySelector('button'),
        checkbox = document.querySelector('input[type="checkbox"]'),
        

        movieDB = {
            movies: [
                'Логан',
                'Ліга справедливості',
                'Аватар',
                'Одержимість',
                'Скотт Пілігрім проти...'
            ]
        };

    const deletAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    

    const makeChanged = () => {
        promo.style.backgroundImage = 'url("/img/bg.jpg")';
        text.textContent = `Драма`;
    };



    const sortArr = (arr) => {
        arr.sort();
    };



    function add(film, filmList) {

        filmList.innerHTML = '';
        sortArr(film);

        film.forEach((items, init) => {
            list.innerHTML += `<li class="promo__interactive-item">${init + 1}. ${items}
        <div class="delete"></div>
        </li>`;
        });

        document.querySelectorAll('.delete').forEach((item, i) => {

            item.addEventListener('click', () => {
    
                item.parentElement.remove();
                film.splice(i, 1);
                
                add(film, filmList);
                
            });
            
        });

    }




    btn.addEventListener('click', (event) => {

        event.preventDefault();

        let adding = document.querySelector('.adding__input').value.toUpperCase();


        if (adding && adding.length <= 21) {
            movieDB.movies.push(adding);
            if (checkbox.checked) {
                console.log(`Додано в любимі`);
            }
        }
        if (adding.length >= 21) {
            movieDB.movies.push(adding.substring(0, 20) + '...');
            if (checkbox.checked) {
                console.log(`Додано в любимі`);
            }
        }

        document.querySelector('.adding__input').value = '';

        sortArr(movieDB.movies);

        add(movieDB.movies, list);



    });
  
    makeChanged();
    add(movieDB.movies, list);
    deletAdv(adv);
});