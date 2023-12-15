// Подсветка элементов навигации при прокрутке страницы
$(document).ready(function(){
    var topOffset = 100; // расстояние от верха страницы до элемента навигации
    $(window).scroll(function() {
        if ($(this).scrollTop() > topOffset) {
            $('.nav a').addClass('active');
        } else {
            $('.nav a').removeClass('active');
        }
    });
});

// Огненные звезды
function drawStars(num) {
    for (var i = 0; i < num; i++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var star = document.createElement('div');
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = '2px';
        star.style.height = '2px';
        star.style.backgroundColor = 'rgba(255, 255, 0, 0.5)';
        star.style.position = 'absolute';
        star.style.boxShadow = '0 0 20px rgba(255, 255, 0, 0.5)';
        document.body.appendChild(star);
    }
}

// Функция часов
function drawClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var clock = document.getElementById('clock');
    clock.innerHTML = hours + ':' + minutes + ':' + seconds;
}

// Вызов функций
drawStars(50);
setInterval(drawClock, 1000);
