$(document).ready(function () {
    var navHeight = $('.nav_menu').outerHeight(); // Высота фиксированного меню
    var windowHeight = $(window).height(); // Высота окна просмотра

    // Функция для проверки активной секции
    function updateActiveLink() {
        var scrollPos = $(document).scrollTop(); // Позиция прокрутки
        var middleOfScreen = scrollPos + (windowHeight / 2); // Средина экрана

        var foundActive = false; // Флаг для определения, была ли найдена активная секция

        $('.nav_menu_link').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href")); // Получаем секцию, на которую указывает ссылка

            var elementTop = refElement.offset().top; // Верх секции
            var elementBottom = elementTop + refElement.outerHeight(); // Низ секции

            // Проверяем, находится ли середина экрана в пределах секции
            if (middleOfScreen >= elementTop && middleOfScreen <= elementBottom) {
                if (!foundActive) {
                    $('.nav_menu_link').removeClass("active"); // Убираем класс active со всех ссылок
                    currLink.addClass("active"); // Добавляем active к текущей ссылке
                    foundActive = true; // Устанавливаем флаг, что активная секция найдена
                }
            }
        });

        // Если не найдена ни одна секция, удаляем класс active у всех ссылок
        if (!foundActive) {
            $('.nav_menu_link').removeClass("active");
        }
    }

    // Обновляем активную ссылку при скролле
    $(document).on("scroll", updateActiveLink);

    // При клике на ссылку плавно скроллим к секции
    $('.nav_menu_link').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').animate({
            scrollTop: $(target).offset().top - navHeight // Учет высоты меню
        }, 500, function () {
            window.location.hash = target;
        });
    });

    // Инициализируем активную ссылку при загрузке страницы
    updateActiveLink();

    // Обновляем активную ссылку при изменении размера окна
    $(window).on('resize', function () {
        windowHeight = $(window).height(); // Обновляем высоту окна
        updateActiveLink(); // Обновляем активные ссылки
    });
});
