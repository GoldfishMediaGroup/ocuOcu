window.$ = window.jQuery = require('jquery');
window.ripples = window.jQuery = require('jquery.ripples');



function ripplesBanner () {
    $(document).ready(function () {
        $('[data-ripples-img]').ripples({
          imageUrl: $('[data-ripples-img]').attr('data-ripples-img'),
          perturbance: 0.02,
          dropRadius: 20,
          resolution: 612
        });
      
        const ripples_block = document.querySelector('[data-ripples-img]');
        if (ripples_block) {
          const ripples_block_position = ripples_block.getBoundingClientRect();
          let ripples_block_mouse_x = 0,
            ripples_block_mouse_y = 0;
      
      
      
      
          $('[data-ripples-img]').ripples('drop', 500, 500, 20, 0.04);
          setInterval(function () {
            var $el = $('[data-ripples-img]');
            var x = Math.random() * $el.outerWidth();
            var y = Math.random() * $el.outerHeight();
            var dropRadius = 10;
            var strength = 0.04 + Math.random() * 0.04;
      
            $el.ripples('drop', x, y, dropRadius, strength);
          }, 2000);
      
      
          // let intervalIds = [];

          // Функция для старта анимации
          // function startAnimation() {
          //   // Немедленно запускаем первую "каплю"
          //   $('[data-ripples-img]').ripples('drop', 0, 0, 30, 0.04);
      
          //   // Создаём интервалы и сохраняем их id
          //   intervalIds.push(setInterval(() => {
          //     $('[data-ripples-img]').ripples('drop', 200, -200, 30, 0.04);
          //   }, 1000));
      
          //   intervalIds.push(setInterval(() => {
          //     $('[data-ripples-img]').ripples('drop', -200, -150, 30, 0.04);
          //   }, 6000));
      
          //   intervalIds.push(setInterval(() => {
          //     $('[data-ripples-img]').ripples('drop', 0, 0, 30, 0.04);
          //   }, 3000));
          // }
      
          // // Функция для остановки анимации
          // function stopAnimation() {
          //   intervalIds.forEach(id => clearInterval(id));
          //   intervalIds = [];
          // }
      
          // // Функция для запуска анимационного цикла: 5 секунд анимации, затем 5 секунд паузы
          // function toggleAnimation() {
          //   startAnimation();
          //   setTimeout(stopAnimation, 6000);
          // }
      
          // // Запускаем цикл: каждые 10 секунд начинается новый период анимации (5 сек. анимации + 5 сек. паузы)
          // toggleAnimation(); // старт сразу
          // setInterval(toggleAnimation, 15000);
      




          
          ripples_block.addEventListener('mousemove', (e) => {
            ripples_block_mouse_x = e.pageX;
            ripples_block_mouse_y = e.pageY;
          });
      
          // window.addEventListener('scroll', () => {
          //   if (scrollY < ripples_block_position.bottom) {
          //     $('[data-ripples-img]').ripples('drop', ripples_block_mouse_x, ripples_block_mouse_y + scrollY, 20, 0.04);
          //   }
          // });
        }
      });
}

export default ripplesBanner