window.$ = window.jQuery = require('jquery');
window.ripples = window.jQuery = require('jquery.ripples');

// function updateRipplesImage() {
//   let $el = $('[data-ripples-img]');
//   let newImage = $('body').hasClass('dark-theme') ? $el.attr('data-ripples-img-dark') : $el.attr('data-ripples-img-light');

//   $el.css('background-image', `url(${newImage})`); // Меняем фон
//   $el.ripples('destroy'); // Удаляем старый эффект
//   $el.ripples({
//     imageUrl: newImage, // Устанавливаем новое изображение
//     perturbance: 0.02,
//     dropRadius: 20,
//     resolution: 612
//   });
// }

function changeTheme() {
  document.body.classList.add('light-theme');
  const btn = document.querySelector('.header__theme-btn');

  btn.addEventListener('click', () => {
    btn.classList.toggle('isActive');

    if (btn.classList.contains('isActive')) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    }

    // updateRipplesImage();
  });
}

export default changeTheme;
