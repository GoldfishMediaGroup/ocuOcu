

function cursor() {
 const cursors = document.querySelectorAll('.cursor-rotate'); // Выбирает все элементы с классом .cursor-rotate

  if (cursors.length > 0) {
    let movementHistory = []; // История последних перемещений
    const maxHistory = 5; // Максимальное количество точек для учета
    let currentRotation = null; // Текущий угол поворота
    const segmentAngles = {
      0: 290, // Низ
      1: 335, // Низ-право
      2: 20, // Право
      3: 65, // Верх-право
      4: 110, // Верх
      5: 155, // Верх-лево
      6: 200, // Лево
      7: 245 // Низ-лево
    };

    let lastMouseEvent = null; // Последнее событие мыши
    let isAnimating = false; // Флаг для предотвращения множественных анимаций
    let cursorX = window.innerWidth / 2;
    let cursorY = window.innerHeight / 2;

    function calculateAverageVector(history) {
      let sumDx = 0,
        sumDy = 0;
      history.forEach((move) => {
        sumDx += move.dx;
        sumDy += move.dy;
      });
      return { dx: sumDx / history.length, dy: sumDy / history.length };
    }

    function calculateAngleFromVector(dx, dy) {
      const angleRadians = Math.atan2(dy, dx);
      return (angleRadians * 180) / Math.PI;
    }

    function interpolateAngle(from, to) {
      const delta = ((to - from + 540) % 360) - 180;
      return from + delta;
    }

    function animate() {
      if (!lastMouseEvent) {
        isAnimating = false;
        return;
      }

      const { clientX: mouseX, clientY: mouseY } = lastMouseEvent;

      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      if (movementHistory.length > 0) {
        const lastPoint = movementHistory[movementHistory.length - 1];
        const dx = mouseX - lastPoint.x;
        const dy = mouseY - lastPoint.y;
        if (dx !== 0 || dy !== 0) {
          movementHistory.push({ dx, dy, x: mouseX, y: mouseY });
        }
      } else {
        movementHistory.push({ dx: 0, dy: 0, x: mouseX, y: mouseY });
      }

      if (movementHistory.length > maxHistory) {
        movementHistory.shift();
      }

      const avgVector = calculateAverageVector(movementHistory);
      let averageAngle = calculateAngleFromVector(avgVector.dx, avgVector.dy);
      averageAngle = (averageAngle + 360) % 360;

      const segment = Math.floor(averageAngle / 45) % 8;
      const targetRotation = segmentAngles[segment];

      if (currentRotation === null) {
        currentRotation = targetRotation;
      } else {
        currentRotation = interpolateAngle(currentRotation, targetRotation);
      }

      cursors.forEach((cursor) => {
        cursor.style.transform = `rotate(${currentRotation}deg)`;
      });

      requestAnimationFrame(animate);
    }

    window.addEventListener('mousemove', (event) => {
      lastMouseEvent = event;
      if (!isAnimating) {
        isAnimating = true;
        requestAnimationFrame(animate);
      }
    });
  }

  const cursorWrapper = document.querySelectorAll('.cursor');

  if (cursorWrapper.length > 0) {
    document.addEventListener('mousemove', (event) => {
      cursorWrapper.forEach((cursorWrap) => {
        cursorWrap.style.top = `${event.clientY - 13}px`;
        cursorWrap.style.left = `${event.clientX - 13}px`;
      });
    });
  }



}

export default cursor;
