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
      duration: 1.6,
      width: 0,
      delay: 0.8,
      ease: 'linear'
    })
      .to(eyePupil, {
        duration: 0.8,
        x: '10rem',
        ease: 'linear'
      })
      .to(
        eyeWrapper,
        {
          duration: 0.8,
          x: '18rem',
          ease: 'linear'
        },
        '-=0.8'
      )
      .to(
        logo,
        {
          duration: 0.8,
          x: '0',
          opacity: 1,
          ease: 'linear'
        },
        '-=0.8'
      )
      .to(eyePupil, {
        duration: 0.8,
        x: '0',
        ease: 'linear'
      })

      .to(
        bg,
        {
          duration: 0.6,
          opacity: 1,
          y: 0,
          delay: 0.6,
          ease: 'ease',
          onComplete: () => resolve()
        },
        '-=0.5'
      );
  });
}

export default intro;
