import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
window.$ = window.jQuery = require('jquery');
function beautyAnim() {
  gsap.registerPlugin(ScrollTrigger);

  function beautySectionAnim() {
    const section = document.querySelector('.beauty__inner');

    const beautyBox = document.querySelector('.beauty__beauty-box');
    const beautyTextBox = document.querySelectorAll('.beauty__text');
    const beautyTitleLetters = document.querySelectorAll('.beauty__title-box--blue .beauty__title span');
    const beautyTitle = document.querySelector('.beauty__title-box--blue .beauty__title');

    const circle = document.querySelector('.beauty__circle');

    const advantagesBox = document.querySelector('.beauty__advantages-box');

    const advantagesTitle = document.querySelector('.beauty__title-box--white .beauty__title');

    const advantagesLine = document.querySelectorAll('.beauty__item-line');
    const advantagesCircle = document.querySelectorAll('.beauty__item-circle');


    const advantagesSvgBoxShow = document.querySelectorAll('.beauty__item-svg-box.beauty__item-svg-box--show');
    const advantagesSvgBoxHidden = document.querySelectorAll('.beauty__item-svg-box.beauty__item-svg-box--hidden');
    const advantagesSvgBoxShowOne = document.querySelectorAll(
      '.beauty__item-wrapper--left .beauty__item-svg-box.beauty__item-svg-box--show'
    );

    const advantagesTitleBoxShow = document.querySelectorAll('.beauty__item-title--show');
    const advantagesTitleBoxHidden = document.querySelectorAll('.beauty__item-title--hidden');
    const advantagesTitleBoxShowOne = document.querySelectorAll('.beauty__item-wrapper--left .beauty__item-title--show');

    const advantagesTextBoxShow = document.querySelectorAll('.beauty__item-text--show');
    const advantagesTextBoxHidden = document.querySelectorAll('.beauty__item-text--hidden');
    const advantagesTextBoxShowOne = document.querySelectorAll('.beauty__item-wrapper--left .beauty__item-text--show');

    const titleBlue = document.querySelector('.beauty__inner');

    gsap.set(beautyBox, { opacity: 0 });
    gsap.set(beautyTextBox, { y: '+=100%' });
    gsap.set(beautyTitleLetters, { y: '+=100%' });
    gsap.set(advantagesTitle, { x: '105%' });
    gsap.set([advantagesSvgBoxShow, advantagesTitleBoxShow, advantagesTextBoxShow], { y: '+=100%' });
    gsap.set(advantagesLine, { width: 0 });
    gsap.set(advantagesCircle, { opacity: 0 });

    let main = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top',
        end: '+=10000',
        scrub: true,
        pin: true,
        pinSpacer: true,
        invalidateOnRefresh: true,
        anticipatePin: 0,
        pinType: 'fixed',
        immediatelyRender: true
      }
    });

    let mainTwo = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top',
        end: '+=10000',
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 0,
        immediatelyRender: true
      }
    });

    // Анимация с использованием GSAP
    mainTwo
      // первый ряд
      .to(beautyBox, {
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out'
      })
      .to(beautyTextBox, {
        duration: 0.3,
        y: 0,
        ease: 'power2.out'
      })
      .to(
        beautyTitleLetters,
        {
          y: 0,
          duration: 0.3,
          // x: '-98%',
          stagger: {
            amount: 0.4
          },
          ease: 'power2.out'
        },
        '-=0.3'
      )
      .to(beautyTitle, {
        duration: 1.2,
        x: '-98%',
        ease: 'power2.out'
      })
      .to(circle, {
        duration: 0.8,
        scale: 220,
        ease: 'power2.out'
      })
      .to(
        beautyBox,
        {
          duration: 0.8,
          opacity: 0,
          ease: 'power2.out'
        },
        '-=0.7'
      )
      .to(advantagesBox, {
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out'
      })
      .to(advantagesTitle, {
        x: '-105%',
        duration: 1.6,
        ease: 'power2.out'
      },'-=0.2')
      .to(advantagesSvgBoxShow, {
        duration: 0.3,
        y: 0,
        ease: 'power2.out'
      })
      .to(advantagesLine, {
        duration: 0.3,
        width: '100%',
        ease: 'power2.out'
      },'-=0.3')
      .to(advantagesCircle, {
        duration: 0.3,
        opacity: 1,
        ease: 'power2.out'
      },'-=0.3')
      .to(
        advantagesTitleBoxShow,
        {
          duration: 0.3,
          y: 0,
          ease: 'power2.out'
        },
        '-=0.3'
      )
      .to(
        advantagesTextBoxShow,
        {
          duration: 0.3,
          y: 0,
          ease: 'power2.out'
        },
        '-=0.3'
      )
      .to(
        advantagesTextBoxShow,
        {
          duration: 0.7,
          ease: 'power2.out'
        }
      )



      .to(advantagesSvgBoxHidden, {
        duration: 0.3,
        y: '-100%',
        ease: 'power2.out'
      })
      .to(
        advantagesTitleBoxHidden,
        {
          duration: 0.3,
          y: '-100%',
          ease: 'power2.out'
        },
        '-=0.3'
      )
      .to(
        advantagesTextBoxHidden,
        {
          duration: 0.3,
          y: '-100%',
          ease: 'power2.out'
        },
        '-=0.3'
      )
      .to(advantagesSvgBoxShowOne, {
        duration: 0.3,
        y: '-100%',
        ease: 'power2.out'
      },
      '-=0.3')
      .to(
        advantagesTitleBoxShowOne,
        {
          duration: 0.3,
          y: '-100%',
          ease: 'power2.out'
        },
        '-=0.3'
      )
      .to(
        advantagesTextBoxShowOne,
        {
          duration: 0.3,
          y: '-100%',
          ease: 'power2.out'
        },
        '-=0.3'
      )
      .to(
        advantagesTextBoxShowOne,
        {
          duration: 0.7,
          ease: 'power2.out'
        }
      )

 
  }
  beautySectionAnim();
}

export default beautyAnim;
