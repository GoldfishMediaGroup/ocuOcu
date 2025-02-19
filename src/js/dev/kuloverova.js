import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
import 'animate.css';
import WOW from 'wow.js';
window.$ = window.jQuery = require('jquery');
window.ripples = window.jQuery = require('jquery.ripples');

import { rem } from '../utils/constants';

import popup from '../utils/popup';
import form from '../utils/form';
import scroll from '../utils/scroll';

import smoothScroll from '../components/smoothScroll';

import ripplesBanner from '../components/ripplesBanner';
import cursor from '../components/cursor';
import beautyAnim from '../components/beautyAnim';

export const modules = {};

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    scroll();
  } catch {}
  try {
    smoothScroll();
  } catch {}
  try {
    ripplesBanner();
  } catch {}
  try {
    cursor();
  } catch {}
  try {
    beautyAnim();
  } catch {}
});




