const openPopupBtn = document.getElementById('nav_button');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('booking-popup');
const closeBtn = popup.querySelector('.close-btn');

// Открытие всплывающего окна и затемнение фона
openPopupBtn.addEventListener('click', function () {
    overlay.style.display = 'block';
    popup.style.display = 'block';
});

// Закрытие всплывающего окна и отключение затемнения фона
closeBtn.addEventListener('click', function () {
    overlay.style.display = 'none';
    popup.style.display = 'none';
});

// Закрытие при клике на затемненный фон
overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
    popup.style.display = 'none';
});