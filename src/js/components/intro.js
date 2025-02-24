import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

function intro() {
  return new Promise((resolve, reject) => {
    document.body.style.overflow = 'hidden';
    const preloader = document.querySelector('.intro');
    const eyeWrapper = preloader.querySelector('.intro__eye-wrapper');
    const eyebg = preloader.querySelector('.intro__eye-bg-box');
    const eyePupil = preloader.querySelector('.intro__pupil');
    const logo = preloader.querySelector('.intro__logo-box');
    const bg = preloader.querySelector('.intro__bg-box');

    const tl = gsap.timeline();
    tl.to(eyebg, {
      duration: 1.4,
      width: 0,
      opacity: 0,
      delay: 0.4,
      ease: 'linear'
    })
      .to(eyePupil, {
        duration: 0.6,
        x: '-6rem',
        ease: 'linear'
      })
      .to(eyePupil, {
        duration: 1,
        x: '+6rem',
        ease: 'linear'
      })
      .to(eyePupil, {
        duration: 0.6,
        x: '0',
        ease: 'linear'
      })
      .to(
        eyeWrapper,
        {
          duration: 0.6,
          x: '18rem',
          y: '3rem',
          ease: 'linear'
        },
        '-=0.6'
      )
      .to(
        logo,
        {
          duration: 0.6,
          x: '0',
          opacity: 1,
          ease: 'linear'
        },
        '-=0.6'
      )
      .to(eyePupil, {
        duration: 0.5,
        x: '0',
        ease: 'linear'
      })

      .to(bg, {
        duration: 0.6,
        opacity: 1,
        y: 0,
        ease: 'ease'
      })
      .to(bg, {
        duration: 0.6,
        opacity: 0,
        y: '-=100%',
        ease: 'ease'
      })
      .to(
        preloader,
        {
          opacity: 0,
          ease: 'ease',
          onComplete: () => resolve()
        },
        '-=0.6'
      );
  });
}

export default intro;
