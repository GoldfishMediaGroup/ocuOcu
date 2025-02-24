window.$ = window.jQuery = require('jquery');
window.ripples = window.jQuery = require('jquery.ripples');

function ripplesBanner() {
  $(document).ready(function () {
    // let $el = $('[data-ripples-img]');
    // let newImage = $('body').hasClass('dark-theme')
    // ? $el.attr('data-ripples-img-dark')
    // : $el.attr('data-ripples-img-light');

    //   $('[data-ripples-img]').ripples({
    //     imageUrl: newImage,
    //     perturbance: 0.02,
    //     dropRadius: 20,
    //     resolution: 612
    //   });

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


      ripples_block.addEventListener('mousemove', (e) => {
        ripples_block_mouse_x = e.pageX;
        ripples_block_mouse_y = e.pageY;
      });

    }
  });
}

export default ripplesBanner;
