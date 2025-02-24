import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

function cursor() {
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  

  // ////////////////////////////////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////////////////////////////////

  // const cursorContainer = document.getElementById('cursor'),
  //   floatingEffectStartIndex = Math.floor(6); // Количество элементов, которые ведут себя особым образом

  // let animationTimeout, // Таймер для задержки перед началом эффекта плавания
  //   lastFrameTime = 0, // Время последнего обновления
  //   cursorPosition = { x: 0, y: 0 }, // Текущая позиция курсора
  //   cursorTrail = [], // Массив объектов следов курсора
  //   floatingEffectEnabled = false; // Флаг для включения эффекта плавания

  // class CursorTrailElement {
  //   constructor(index = 0) {
  //     this.index = index;
  //     this.anglespeed = 0.05; // Скорость колебания в режиме "плавания"
  //     this.x = 0;
  //     this.y = 0;
  //     this.scale = 1 - 0.05 * index; // Масштаб следа (уменьшается с увеличением индекса)
  //     this.range = 13 - 13 * this.scale + 2; // Амплитуда колебаний в режиме "плавания"
  //     this.limit = 19.5 * this.scale; // Лимит смещения
  //     this.element = document.createElement('span'); // Создаём элемент следа
  //     gsap.set(this.element, { scale: this.scale }); // Устанавливаем начальный масштаб через GSAP
  //     cursorContainer.appendChild(this.element); // Добавляем элемент в контейнер курсора
  //   }

  //   // Фиксируем текущие координаты элемента перед включением эффекта "плавания"
  //   lockPosition() {
  //     this.lockX = this.x;
  //     this.lockY = this.y;
  //     this.angleX = 2 * Math.PI * Math.random(); // Случайный угол для горизонтального движения
  //     this.angleY = 2 * Math.PI * Math.random(); // Случайный угол для вертикального движения
  //   }

  //   // Отрисовываем элемент (включая эффект "плавания" при необходимости)
  //   draw(deltaTime) {
  //     if (floatingEffectEnabled && this.index > floatingEffectStartIndex) {
  //       this.angleX += this.anglespeed;
  //       this.angleY += this.anglespeed;
  //       this.y = this.lockY + Math.sin(this.angleY) * this.range;
  //       this.x = this.lockX + Math.sin(this.angleX) * this.range;
  //     }
  //     gsap.set(this.element, { x: this.x, y: this.y });
  //   }
  // }

  // // Функция сбрасывает таймер перед активацией эффекта "плавания"
  // function resetFloatingEffect() {
  //   clearTimeout(animationTimeout);
  //   // animationTimeout = setTimeout(enableFloatingEffect, 150);
  //   floatingEffectEnabled = false;
  // }

  // // Включает эффект "плавания" после задержки
  // function enableFloatingEffect() {
  //   floatingEffectEnabled = true;
  //   cursorTrail.forEach((trail) => trail.lockPosition());
  // }

  // // Главный цикл анимации
  // function animationLoop(currentTime) {
  //   updateCursorTrail(currentTime - lastFrameTime);
  //   lastFrameTime = currentTime;
  //   requestAnimationFrame(animationLoop);
  // }

  // // Обновляем позиции всех элементов следа
  // function updateCursorTrail(deltaTime) {
  //   let x = cursorPosition.x,
  //     y = cursorPosition.y;

  //   cursorTrail.forEach((trail, index, array) => {
  //     let nextTrail = array[index + 1] || array[0];
  //     trail.x = x;
  //     trail.y = y;
  //     trail.draw(deltaTime);

  //     if (!floatingEffectEnabled || index <= floatingEffectStartIndex) {
  //       const dx = 0.35 * (nextTrail.x - trail.x);
  //       const dy = 0.35 * (nextTrail.y - trail.y);
  //       x += dx;
  //       y += dy;
  //     }
  //   });
  // }

  // // Обрабатываем движение мыши
  // window.addEventListener('mousemove', (event) => {
  //   cursorPosition.x = event.clientX - 13;
  //   cursorPosition.y = event.clientY - 13;
  //   resetFloatingEffect();
  // });

  // // Обрабатываем движение пальца на мобильных устройствах
  // window.addEventListener('touchmove', (event) => {
  //   cursorPosition.x = event.touches[0].clientX - 13;
  //   cursorPosition.y = event.touches[0].clientY - 13;
  //   resetFloatingEffect();
  // });

  // // Заполняем массив следов курсора
  // (function initializeCursorTrail() {
  //   for (let i = 0; i < 20; i++) {
  //     let trailElement = new CursorTrailElement(i);
  //     cursorTrail.push(trailElement);
  //   }
  // })();

  // // Запускаем анимацию
  // animationLoop();

  // Mazette скрипт: Пользовательский курсор с движением и вращением

  // ////////////////////////////////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////////////////////////////////

  // const cursors = document.querySelectorAll('.cursor-rotate'); // Выбирает все элементы с классом .cursor-rotate

  // if (cursors.length > 0) {
  //   let movementHistory = []; // История последних перемещений
  //   const maxHistory = 5; // Максимальное количество точек для учета
  //   let currentRotation = null; // Текущий угол поворота
  //   const segmentAngles = {
  //     0: 290, // Низ
  //     1: 335, // Низ-право
  //     2: 20, // Право
  //     3: 65, // Верх-право
  //     4: 110, // Верх
  //     5: 155, // Верх-лево
  //     6: 200, // Лево
  //     7: 245 // Низ-лево
  //   };

  //   let lastMouseEvent = null; // Последнее событие мыши
  //   let isAnimating = false; // Флаг для предотвращения множественных анимаций
  //   let cursorX = window.innerWidth / 2;
  //   let cursorY = window.innerHeight / 2;

  //   function calculateAverageVector(history) {
  //     let sumDx = 0,
  //       sumDy = 0;
  //     history.forEach((move) => {
  //       sumDx += move.dx;
  //       sumDy += move.dy;
  //     });
  //     return { dx: sumDx / history.length, dy: sumDy / history.length };
  //   }

  //   function calculateAngleFromVector(dx, dy) {
  //     const angleRadians = Math.atan2(dy, dx);
  //     return (angleRadians * 180) / Math.PI;
  //   }

  //   function interpolateAngle(from, to) {
  //     const delta = ((to - from + 540) % 360) - 180;
  //     return from + delta;
  //   }

  //   function animate() {
  //     if (!lastMouseEvent) {
  //       isAnimating = false;
  //       return;
  //     }

  //     const { clientX: mouseX, clientY: mouseY } = lastMouseEvent;

  //     cursorX += (mouseX - cursorX) * 0.1;
  //     cursorY += (mouseY - cursorY) * 0.1;

  //     if (movementHistory.length > 0) {
  //       const lastPoint = movementHistory[movementHistory.length - 1];
  //       const dx = mouseX - lastPoint.x;
  //       const dy = mouseY - lastPoint.y;
  //       if (dx !== 0 || dy !== 0) {
  //         movementHistory.push({ dx, dy, x: mouseX, y: mouseY });
  //       }
  //     } else {
  //       movementHistory.push({ dx: 0, dy: 0, x: mouseX, y: mouseY });
  //     }

  //     if (movementHistory.length > maxHistory) {
  //       movementHistory.shift();
  //     }

  //     const avgVector = calculateAverageVector(movementHistory);
  //     let averageAngle = calculateAngleFromVector(avgVector.dx, avgVector.dy);
  //     averageAngle = (averageAngle + 360) % 360;

  //     const segment = Math.floor(averageAngle / 45) % 8;
  //     const targetRotation = segmentAngles[segment];

  //     if (currentRotation === null) {
  //       currentRotation = targetRotation;
  //     } else {
  //       currentRotation = interpolateAngle(currentRotation, targetRotation);
  //     }

  //     cursors.forEach((cursor) => {
  //       cursor.style.transform = `rotate(${currentRotation}deg)`;
  //     });

  //     requestAnimationFrame(animate);
  //   }

  //   window.addEventListener('mousemove', (event) => {
  //     lastMouseEvent = event;
  //     if (!isAnimating) {
  //       isAnimating = true;
  //       requestAnimationFrame(animate);
  //     }
  //   });
  // }

  // const cursorWrapper = document.querySelectorAll('.cursor');

  // if (cursorWrapper.length > 0) {
  //   document.addEventListener('mousemove', (event) => {
  //     cursorWrapper.forEach((cursorWrap) => {
  //       cursorWrap.style.top = `${event.clientY - 13}px`;
  //       cursorWrap.style.left = `${event.clientX - 13}px`;
  //     });
  //   });
  // }
}

export default cursor;
