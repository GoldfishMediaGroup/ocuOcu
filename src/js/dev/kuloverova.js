import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
window.$ = window.jQuery = require('jquery');
window.ripples = window.jQuery = require('jquery.ripples');

import { rem } from '../utils/constants';

import smoothScroll from '../components/smoothScroll';

import ripplesBanner from '../components/ripplesBanner';
import cursor from '../components/cursor';
import beautyAnim from '../components/beautyAnim';

import intro from '../components/intro';
import changeTheme from '../components/changeTheme';

import { bodyLock, bodyUnlock } from '../utils/constants';

export const modules = {};

bodyLock();
document.body.style.overflow = 'hidden';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  try {
    ripplesBanner();
  } catch {}
  try {
    changeTheme();
  } catch {}
  try {
    intro().then(() => {
      window.scrollTo(0, 0);
      document.querySelector('.intro').classList.add('intro-remove');
      document.body.style.overflow = '';
      bodyUnlock();
      try {
        smoothScroll();
      } catch {}
    });
  } catch {}

  try {
    cursor();
  } catch {}
  try {
    beautyAnim();
  } catch {}
});
